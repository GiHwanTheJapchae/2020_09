var map;
var button = document.getElementById('button');
button.addEventListener('click', changeCenter);

function initMap() {
    var seoul = { lat: 35.132790, lng: 129.105719 };
    map = new google.maps.Map(document.getElementById('map'), { zoom: 16, center: seoul });
    new google.maps.Marker({ position: seoul, map: map, label: "HomeBase" });
}
function changeCenter() { var busan = { lat: 35.1379222, lng: 129.05562775 };
    map.panTo(busan); map.setZoom(14);
}

