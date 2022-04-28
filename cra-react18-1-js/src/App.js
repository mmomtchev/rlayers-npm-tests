import './App.css';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import * as rl from 'rlayers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <rl.RMap width={'100%'} height={'60vh'} initial={{center: fromLonLat([2.364, 48.82]), zoom: 11}}>
          <rl.ROSM />
        </rl.RMap>
      </header>
    </div>
  );
}

export default App;
