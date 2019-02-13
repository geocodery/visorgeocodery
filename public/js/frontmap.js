// Delarando variables
// const osm_url = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const imaginery = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'

var lmap = L.map('map', {center: [-9, -75], zoom: 5});

// var osm_mapnik = L.tileLayer(osm_url, {
// 	maxZoom: 19,
// }).addTo(lmap);

var img_mapnik = L.tileLayer(imaginery, {
	maxZoom: 19,
}).addTo(lmap);