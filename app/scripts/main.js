/* global L */
'use strict';


$(function() {
	// create a map in the "map" div, set the view to a given place and zoom
	var map = L.map('map').setView([52.534400, 13.358581], 15);

	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	L.tileLayer.provider('OpenStreetMap.HOT').addTo(map);

	// add a marker in the given location, attach some popup content to it and open the popup
	//L.Icon.Default.imagePath = 'http://cdn.leafletjs.com/leaflet-0.7.3/images/marker-icon.png';
	L.marker([52.534400, 13.358581]).addTo(map);
		//.bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
		//.openPopup();

	// bootstrap modal window
	$('[data-toggle="modal"]').on('click', function() {
		var elem = $(this).attr('data-target');
		$(elem).modal();
	});

});