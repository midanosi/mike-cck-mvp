<script>
	import Leaflet from 'leaflet';
	// import pluscodes from 'pluscodes';
	import { afterUpdate, onMount } from 'svelte';

	// // console.log(`pluscodes`, pluscodes)

	// // import pluscodes  'pluscodes'
	// const decode = require('pluscodes').decode;
	import { decode } from '$lib/pluscodes';

	export let data;

	onMount(() => {
		console.log('hi');
        console.log(`data.meal_recipient`, data.meal_recipient)

        // INIT MAP
		let map = Leaflet.map('map', {
            center: [52.205243, 0.1277719],
			zoom: 13
		});
		console.log(`map`, map);

        // ADD OPENSTREETMAP TILELAYER
        Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map)

        // ADD MARKERS
        const delivery_locations = data.meal_recipient.items.map((item) => item.pluscode);
        delivery_locations.forEach((location) => {
            console.log(`location`, location)
            const as_gps = decode(location);
            console.log(`as_gps`, as_gps)
            Leaflet.marker([as_gps.latitudeCenter, as_gps.longitudeCenter]).addTo(map);
        });
	});
    // afterUpdate(() => {
    //     if (!data.meal_recipient) {}
    //     console.log(`data.meal_recipient`, data.meal_recipient)
    //     const delivery_locations = data.meal_recipient.items.map((item) => item.pluscode);
    //     delivery_locations.forEach((location) => {
    //         console.log(`location`, location)
    //         const as_gps = decode(location);
    //         console.log(`as_gps`, as_gps)
    //         Leaflet.marker([as_gps.latitude, as_gps.longitude]).addTo(map);
    //     });
	// 	console.log('the component just updated');
	// });
</script>

<!-- <p>{JSON.stringify(delivery_locations, null, 2)}</p> -->
<div id="map" />

<style>
	#map {
		width: 1200px;
		height: 600px;
	}
</style>
