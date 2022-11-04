window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('map');
    const map = L.map(container);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    /*L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
        maxZoom: 14,
        zoomOffset: -1,
        tileSize: 512,
        accessToken: 'pk.eyJ1Ijoid29sZmdhbmdtbSIsImEiOiJjam1kMjVpMnUwNm9wM3JwMzdsNGhhcnZ0In0.v65crewF-dkNsPF3o1Q4uw'
    }).addTo(map);*/
    const zoom = parseInt(container.dataset.zoom);
    map.setView(L.latLng(47.4233, 9.3772), zoom);

    fetch("/feed/geo.json")
    .then(response => response.json())
    .then(json => {
        const layer = L.geoJSON([json]);
        const markers = L.markerClusterGroup({
            disableClusteringAtZoom: 7
        })
            .bindTooltip(function (layer) {
                return layer.feature.properties.name;
            })
            .bindPopup(function (layer) {
                return layer.feature.properties.description;
            });
        markers.addLayer(layer);
        map.addLayer(markers);

        document.querySelectorAll('.geoplace').forEach(place => {
            place.addEventListener('mouseover', () => {
                const latLong = place.dataset.coordinates.split(',');
                const coords = L.latLng(latLong[0], latLong[1]);
                map.setView(coords, zoom + 5);
            });
        });
    });
});