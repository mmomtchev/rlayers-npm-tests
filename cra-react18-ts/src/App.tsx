import React from 'react';
import './App.css';

import { RMap, ROSM } from "rlayers";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";

const center = fromLonLat([2.364, 48.82]);

function App() {
  return (
    <RMap width={"100%"} height={"60vh"} initial={{ center: center, zoom: 11 }}>
      <ROSM />
    </RMap>
  );
}

export default App;
