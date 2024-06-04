import LocationsTable from './components/LocationsTable/LocationsTable';
import {initMap} from './utils/initMap';

export default function App() {
  initMap();
  return (
    <main>
      <h1>Dashboard</h1>
      <div className="main-wrapper">
        <div id="map" />
        <LocationsTable />
      </div>
    </main>
  );
}
