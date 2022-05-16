import './App.css';
import React from 'react';
import Map from "./Components/Map"
import Seasons from "./Components/Seasons"
import Segments from "./Components/Segments"

function App() {
  return (
    <div className="App">
      <div className = "Contain">
        <h1>Superstore Data Visualizations</h1>
        <h2>Brendan Berkman-Dali Application</h2>
        <div className = "map_chart">
          <Map></Map>
        </div>
        <div className = "segment_chart">
          <Seasons></Seasons>
        </div>
        <div className = "line_chart">
          <Segments></Segments>
        </div>
      </div>

    </div>
  );
}

export default App;
