/* global L */
'use strict';


$(function() {
	// create a map in the "map" div, set the view to a given place and zoom
	var map = L.map('map', {scrollWheelZoom: false}).setView([52.534400, 13.358581], 15);

	// add an OpenStreetMap tile layer
	L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
		attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a>'
	}).addTo(map);

	// add a marker in the given location, attach some popup content to it and open the popup
	L.Icon.Default.imagePath = '/images';
	L.marker([52.534400, 13.358581]).addTo(map);

	// bootstrap modal window
	$('[data-toggle="modal"]').on('click', function() {
		var elem = $(this).attr('data-target');
		$(elem).modal();
	});

});