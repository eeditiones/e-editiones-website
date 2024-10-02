let data = []; // JSON-Data
let filteredData = []; // Filtered Data
const markers = [];

// Initialize the map
const map = L.map("map").setView([51.1657, 10.4515], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
}).addTo(map);

// Create MarkerCluster-Groups
const markerClusterGroup = L.markerClusterGroup();
map.addLayer(markerClusterGroup);

// Load and prepare data
fetch("/feed/geo-new.json")
  .then((response) => response.json())
  .then((json) => {
    data = json;
    filteredData = data;
    updateMap();
    updateList();
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
                    <b>${item.name}</b><br>
                    ${item.address}<br>
                    ${item.description}<br>
                    <a href="${item.url}" target="_blank">Website</a><br>
                    <a href="mailto:${item.email}">${item.email}</a>
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

  filteredData.forEach((item, index) => {
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

  visibleMarkers.forEach(({ data }) => {
    const listItem = createListItem(data);
    listContainer.appendChild(listItem);
  });
}

function createListItem(item) {
  const listItem = document.createElement("li");
  listItem.className = "list-item";

  listItem.innerHTML = `
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <a href="${item.url}" target="_blank">Link</a>
                <a href="mailto:${item.email}">Contact</a>
            `;
  listItem.addEventListener("click", () => {
    const selectedMarker = markers.find(
      (markerObj) => markerObj.data === item
    ).marker;

    // setTimeout(function(){
      removeSizingClasses();
      document.querySelector('#list-container').classList.add('minimal');
    // },400);

    map.setView(selectedMarker.getLatLng(), 14);
    setTimeout(function(){selectedMarker.openPopup()}, 600);
    setTimeout(function(){ map.invalidateSize()}, 600);

  });

  return listItem;
}

document.getElementById("search").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.address.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.url.toLowerCase().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm)
  );
/*
  updateMap();
  updateList();
*/
  setTimeout(function(){updateMap()}, 600);
  setTimeout(function(){updateList()}, 600);

});

map.on("moveend", function () {
  updateVisibleList();
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("search").value = "";
  filteredData = data;
/*
  updateMap();
  updateList();
*/
  setTimeout(function(){updateMap()}, 600);
  setTimeout(function(){updateList()}, 600);
  setTimeout(function(){ map.invalidateSize()}, 600);

  document.querySelector('#list-container').classList.remove('full');
  document.querySelector('#list-container').classList.remove('half');
  document.querySelector('#list-container').classList.add('minimal');
});



