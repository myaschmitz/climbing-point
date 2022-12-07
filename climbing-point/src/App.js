import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Mapbox from './components/Mapbox';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Climbing Point</h1>
        <Mapbox></Mapbox>
      </header>
    </div>
  );
}

export default App;
