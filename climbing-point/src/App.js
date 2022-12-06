import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibXlhc2NobWl0eiIsImEiOiJjbDlzMmtnbTAwN25nM3RzNTIxNDc4Z2NuIn0.WW5EcKyY2AQDi7m-513m4w';

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(6);

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
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div style={{margin: 'auto'}} ref={mapContainer} className="map-container" />
      </header>
    </div>
  );
}

export default App;
