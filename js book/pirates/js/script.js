'use strict';
function init() {
    var map = document.getElementById("map");
    map.onmousemove = showCoords;
}
function showCoords(event) {
    var map = document.getElementById("coords");
    var x = event.pageX;
    var y = event.pageY;
    map.innerHTML = "Map coordinates: X=" + x + " Y=" + y; 
}
window.onload = init;
