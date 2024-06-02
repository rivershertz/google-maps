import {initMap} from './utils/initMap';

export default function App() {
  const apiKey = 'AIzaSyAfjgo88kqQ2H-82d4NophQP9iKbaIGQH8';

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
