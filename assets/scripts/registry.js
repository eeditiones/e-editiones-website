let data = []; // JSON-Data
let filteredData = []; // Filtered Data
const markers = [];

// Initialize the map
const map = L.map("map").setView([51.1657, 10.4515], 6);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Create MarkerCluster-Groups
const markerClusterGroup = L.markerClusterGroup();
map.addLayer(markerClusterGroup);

// Escape data values before injecting them into HTML
function esc(value) {
  const div = document.createElement("div");
  div.textContent = value == null ? "" : String(value);
  return div.innerHTML;
}

// Load and prepare data
fetch("/feed/geo-new.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load registry data");
    }
    return response.json();
  })
  .then((json) => {
    data = json;
    filteredData = data;
    updateMap();
    updateList();
  })
  .catch(() => {
    const listContainer = document.getElementById("entries");
    listContainer.innerHTML =
      '<li class="list-item"><p>The registry could not be loaded. Please try again later.</p></li>';
  });

function updateMap() {
  // Clear all Marker
  markerClusterGroup.clearLayers();
  markers.length = 0;
  map.invalidateSize();

  // Add new Marker
  filteredData.forEach((item) => {
    const marker = L.marker([item.latitude, item.longitude]);
    marker.bindPopup(`
                    <b>${esc(item.name)}</b><br>
                    ${esc(item.address)}<br>
                    ${esc(item.description)}<br>
                    <a href="${esc(item.url)}" target="_blank" rel="noopener">Website</a>
                    ${item.email ? `<br><a href="mailto:${esc(item.email)}">${esc(item.email)}</a>` : ""}
                `);
    markers.push({ marker, data: item });
    markerClusterGroup.addLayer(marker);
  });

  if (filteredData.length > 0) {
    const bounds = L.latLngBounds(
      filteredData.map((item) => [item.latitude, item.longitude])
    );
    map.fitBounds(bounds);
  } else {
    map.setView([51.1657, 10.4515], 6); // Standard view
  }

  updateVisibleList();
}

function updateList() {
  const listContainer = document.getElementById("entries");
  listContainer.innerHTML = "";

  if (filteredData.length === 0) {
    listContainer.innerHTML =
      '<li class="list-item"><p>No entries match your filter.</p></li>';
    return;
  }

  filteredData.forEach((item) => {
    const listItem = createListItem(item);
    listContainer.appendChild(listItem);
  });
}

function updateVisibleList() {
  const bounds = map.getBounds();
  const visibleMarkers = markers.filter(({ marker }) =>
    bounds.contains(marker.getLatLng())
  );

  const listContainer = document.getElementById("entries");
  listContainer.innerHTML = "";

  if (visibleMarkers.length === 0 && filteredData.length === 0) {
    listContainer.innerHTML =
      '<li class="list-item"><p>No entries match your filter.</p></li>';
    return;
  }

  visibleMarkers.forEach(({ data }) => {
    const listItem = createListItem(data);
    listContainer.appendChild(listItem);
  });
}

function createListItem(item) {
  const listItem = document.createElement("li");
  listItem.className = "list-item";

  listItem.innerHTML = `
                <h2>${esc(item.name)}</h2>
                <p>${esc(item.description)}</p>
                <a href="${esc(item.url)}" target="_blank" rel="noopener">Link</a>
                ${item.email ? `<a href="mailto:${esc(item.email)}">Contact</a>` : ""}
            `;
  listItem.addEventListener("click", () => {
    const selectedMarker = markers.find(
      (markerObj) => markerObj.data === item
    ).marker;

    removeSizingClasses();
    document.querySelector('#list-container').classList.add('minimal');

    map.setView(selectedMarker.getLatLng(), 14);
    setTimeout(function(){selectedMarker.openPopup()}, 600);
    setTimeout(function(){ map.invalidateSize()}, 600);

  });

  return listItem;
}

// Debounced filtering: only the last keystroke within 300ms triggers an update
let filterTimer = null;

document.getElementById("search").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  clearTimeout(filterTimer);
  filterTimer = setTimeout(function () {
    filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm) ||
        item.address.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.url.toLowerCase().includes(searchTerm) ||
        item.email.toLowerCase().includes(searchTerm)
    );
    updateMap();
    updateList();
  }, 300);
});

map.on("moveend", function () {
  updateVisibleList();
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("search").value = "";
  clearTimeout(filterTimer);
  filteredData = data;
  updateMap();
  updateList();
  setTimeout(function(){ map.invalidateSize()}, 600);

  removeSizingClasses();
  document.querySelector('#list-container').classList.add('minimal');
});
