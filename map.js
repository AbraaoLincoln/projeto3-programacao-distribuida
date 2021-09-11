window.onload = () => {
    //loadMap();
}

function loadMap() {
    var map = L.map('map').setView([-5.79448, -35.211], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    var marker = new L.marker([-5.79448, -35.211]).addTo(map);
    marker = new L.marker([-5.79148, -35.211]).addTo(map);
}