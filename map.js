window.onload = () => {
    loadMap();
}

var origin = [-5.787677745661272, -35.245123244552246];
var map;

async function loadMap() {
    map = L.map('map').setView(origin, 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
    map.dragging.disable();
}

async function updateMap(event) {
    event.preventDefault();
    let bairro = document.getElementById('bairro').value;

    if(bairro != '') {
        let services = await getServices(bairro);
        if(services.length > 0) {
            map.setView(services[0].location.coordinates, 13);

            let marker;
            for(let service of services) {
                marker = new L.marker(service.location.coordinates).bindTooltip(`<b>${service.name}</b>`, {permanent: true,  offset: [-65, -32] }).addTo(map);        
            }
        }else {
            alert("Nenhum serviço encontrado no bairro " + bairro);
        }
    }else {
        alert("bairro invalido");
    }
}

function x() {
    // var marker = new L.marker([-5.744178761920199, -35.20799362887624]).bindTooltip("<b>Hello world!</b>", {permanent: true,  offset: [-65, -32] }).on('dblclick', x).addTo(map);
    // marker = new L.marker([-5.79148, -35.211]).bindTooltip("<b>Hello world!</b>", {permanent: true,  offset: [-65, -32] }).addTo(map);
    //map.dragging.disable();
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

async function getServices(bairro) {
    try {
        let data = await fetch(`http://localhost:1026/v2/entities/?q=bairro==${bairro}&type=service&options=keyValues`);

        let json = await data.json();
        //console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }

}