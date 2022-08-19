import React from 'react';
import './App.css';

import { fromLonLat } from 'ol/proj';
import { Coordinate } from 'ol/coordinate';
import { Polygon, Point } from 'ol/geom';

import { RMap, ROSM, RLayerVector, RFeature, RPopup } from 'rlayers';
import { RStyle, RFill, RStroke } from 'rlayers/style';
import { RFeatureUIEvent } from 'rlayers/RFeature';

import 'ol/ol.css';
import 'rlayers/control/layers.css';

const center = fromLonLat([2.364, 48.82]);

const coords: Record<string, Coordinate> = {
  origin: [2.364, 48.82],
  ArcDeTriomphe: [2.295, 48.8737],
  PlaceDItalie: [2.355, 48.831],
  Bastille: [2.369, 48.853],
  TourEiffel: [2.294, 48.858],
  Montmartre: [2.342, 48.887]
};


function App() {
  return (
    <RMap className='example-map' initial={{ center, zoom: 11 }}>
      <ROSM />
      <RLayerVector zIndex={10}>
        <RFeature geometry={new Point(fromLonLat(coords.ArcDeTriomphe))}>
          <RStyle>
            <RStroke color='yellow' width={4} />
            <RFill color='transparent' />
          </RStyle>
          <RPopup trigger={'click'} className='example-overlay'>
            <div className='card'>
              <p className='card-header'>
                <strong>Arc de Triomphe</strong>
              </p>
              <p className='card-body text-center'>Popup on click</p>
            </div>
          </RPopup>
        </RFeature>
        <RFeature
          geometry={
            new Polygon([
              [
                fromLonLat(coords.PlaceDItalie),
                fromLonLat(coords.Bastille),
                fromLonLat(coords.TourEiffel),
                fromLonLat(coords.PlaceDItalie)
              ]
            ])
          }
          onClick={React.useCallback(
            (e: RFeatureUIEvent) =>
              e.map.getView().fit(e.target.getGeometry()!.getExtent(), {
                duration: 250
              }),
            []
          )}
        >
          <RStyle>
            <RStroke color='yellow' width={4} />
            <RFill color='transparent' />
          </RStyle>
          <RPopup trigger={'hover'} className='example-overlay'>
            <p>
              <strong>Les catacombes</strong>
            </p>
            <p>
              <em>Popup on hover, pan on click</em>
            </p>
          </RPopup>
        </RFeature>
      </RLayerVector>
    </RMap>
  );
}

export default App;
