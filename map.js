window.onload = () => {
    loadMap();
}

function loadMap() {
    var map = L.map('map').setView([-5.744178761920199, -35.20799362887624], 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    var marker = new L.marker([-5.744178761920199, -35.20799362887624]).bindTooltip("<b>Hello world!</b>", {permanent: true,  offset: [-65, -32] }).on('dblclick', x).addTo(map);
    marker = new L.marker([-5.79148, -35.211]).bindTooltip("<b>Hello world!</b>", {permanent: true,  offset: [-65, -32] }).addTo(map);
    map.dragging.disable();
}

function x() {
    console.log("teste");
}

function showFormService() {
    document.getElementById("form-service").classList.remove("d-none");
    document.getElementById("form-service").classList.add("d-flex");
}

function hideFormService() {
    document.getElementById("form-service").classList.remove("d-flex");
    document.getElementById("form-service").classList.add("d-none");
}