import React, { useRef, useEffect, useState } from 'react';
import "../App.js";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import ReactMapGL, { Marker } from 'react-mapbox-gl';

function Mapbox() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibXlhc2NobWl0eiIsImEiOiJjbDlzMmtnbTAwN25nM3RzNTIxNDc4Z2NuIn0.WW5EcKyY2AQDi7m-513m4w';

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lat, setLat] = useState(47.61);
    const [lng, setLng] = useState(-122.33);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    // store new coordinates
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLat(map.current.getCenter().lat.toFixed(4));
            setLng(map.current.getCenter().lng.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    // const marker1 = new mapboxgl.Marker()
    //     .setLngLat([-100.83, 55.87])
    //     .addTo(map);
    
    // new mapboxgl.Marker(document.createElement('div').setLngLat([-100.83, 55.87]).addTo(map));

    return (
        <div>
            <div className="sidebar">
                Latitude: {lat} | Longitude: {lng} | Zoom: {zoom}
            </div>
            <div id="map" style={{ margin: 'auto' }} ref={mapContainer} className="map-container" />
        </div>
    );
}

export default Mapbox;