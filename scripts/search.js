let indexData = [];

function kwicText(str, start, end, words = 5) {
    let p0 = start - 1;
    let count = 0;
    while (p0 >= 0) {
        if (/[\p{P}\s]/.test(str.charAt(p0))) {
            while (p0 > 1 && /[\p{P}\s]/.test(str.charAt(p0 - 1))) {
                p0 -= 1;
            }
            count += 1;
            if (count === words) {
                break;
            }
        }
        p0 -= 1;
    }
    let p1 = end + 1;
    count = 0;
    while (p1 < str.length) {
        if (/[\p{P}\s]/.test(str.charAt(p1))) {
            while (p1 < str.length - 1 && /[\p{P}\s]/.test(str.charAt(p1 + 1))) {
                p1 += 1;
            }
            count += 1;
            if (count === words) {
                break;
            }
        }
        p1 += 1;
    }
    return `... ${str.substring(p0, start)}<mark>${str.substring(start, end)}</mark>${str.substring(end, p1 + 1)} ...`;
}

function search(index, fields, query) {
    const results = document.getElementById('results');
    results.innerHTML = '';
    
    if (fields === 'all') {
        fields = ['title', 'content'];
    }
    
    index.searchAsync(query, 100, { index: fields }).then((resultsByField) => {
        const result = new Set();
        resultsByField.forEach(byField => {
            byField.result.forEach((idx) => { result.add(idx); });
        });

        const info = document.createElement('h4');
        if (result.length === 100) {
            info.innerHTML = `Showing first 100 matches.`;
        } else {
            info.innerHTML = `Found ${result.size} matches.`;
        }
        results.appendChild(info);

        const tokens = [query, ...query.split(/\W+/)];
        const regex = new RegExp(tokens.join('|'), 'gi');
        result.forEach((idx) => {
            const data = indexData[idx];

            const div = document.createElement('div');
            const head = document.createElement('h3');
            const link = document.createElement('a');
            link.href = data.id;
            link.innerHTML = data.title;
            head.appendChild(link);
            div.appendChild(head);

            const list = document.createElement('ul');
            let matches = Array.from(data.content.matchAll(regex));
            if (matches.length > 10) {
                matches = matches.slice(0, 3);
            }
            for (const match of matches) {
                const kwic = kwicText(data.content, match.index, match.index + match[0].length, 5);
                const li = document.createElement('li');
                li.innerHTML = kwic;
                list.appendChild(li);
            }
            div.appendChild(list);

            results.appendChild(div);
        });
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const fieldSelect = form.querySelector('[name=field]');
    const params = new URLSearchParams(location.search);
    const index = new FlexSearch.Document({
        tokenize: "reverse",
        document: {
            id: "id",
            index: ["content", "title"]
        }
    });

    let query = params.get('query');
    let field = params.get('field') || 'all';
    if (query) {
        searchInput.value = query;
    }
    fieldSelect.value = field;

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        query = searchInput.value;
        field = fieldSelect.value;
        search(index, field, query);
    });

    fetch('/feed/search-index.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return response.json();
    })
    .then((json) => {
        indexData = json;
        json.forEach((entry, idx) => {
            index.add({
                id: idx,
                content: entry.content,
                title: entry.title
            });
            // index.add(idx, entry.content);
        });

        if (query) {
            search(index, field, params.get('query'));
        }
    })
    .catch(error => {
        console.log(error);
        document.getElementById('results').innerHTML = 'Request failed!';
    });
});