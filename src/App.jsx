import {useState} from 'react';
import LocationsTable from './components/LocationsTable.jsx';
import Map from './components/Map.jsx';
import data from './data.js';
import './assets/style.css';

export default function App() {
  const [currentLocation, setCurrentLocation] = useState({});

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="main-wrapper">
        <Map
          setCurrentLocation={setCurrentLocation}
          data={data}
        />
        <LocationsTable
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
        />
      </div>
    </main>
  );
}
