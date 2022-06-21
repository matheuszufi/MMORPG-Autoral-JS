const map = document.getElementById('map-image');
const mapCloseBtn = document.getElementById('maps-close-btn');

const mapCatalog = document.getElementById('maps');



mapsEventListener();
function mapsEventListener() {
    map.addEventListener('click', openMaps);
    mapCloseBtn.addEventListener('click', closeMaps);
}


function openMaps() {
 mapCatalog.style.display = "flex";
}

function closeMaps() {
    mapCatalog.style.display = "none";
}