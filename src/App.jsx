import {initMap} from './utils/initMap';

export default function App() {
  initMap();
  return (
    <div className="App">
      <main>
        <h1>Dashboard</h1>
        <div className="container">
          <div id="map" />
        </div>
      </main>
    </div>
  );
}
