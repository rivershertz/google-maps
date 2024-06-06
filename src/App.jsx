import {useEffect, useState} from 'react';
import LocationsTable from './components/LocationsTable/LocationsTable';
import data from './data.js';
import i18n from './assets/i18n/he.json';
import {MarkerClusterer} from '@googlemaps/markerclusterer';

export default function App() {
  const [currentLocation, setCurrentLocation] = useState({});

  async function initMap() {
    let map;
    const {Map} = await google.maps.importLibrary('maps');
    await google.maps.importLibrary('marker');

    const startingPosition = {lat: 31.771959, lng: 35.217018};
    map = new Map(document.getElementById('map'), {
      zoom: 7,
      center: startingPosition,
      mapId: 'DEMO_MAP_ID',
    });

    const markers = data.map((d) => {
      const iconImage = document.createElement('div');
      iconImage.className = 'marker';
      iconImage.style = `background: ${
        d.status === 'online' ? 'green' : 'red'
      }; `;

      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: d.location,
        map: map,
        title: d.name,
        content: iconImage,
      });

      const infowindow = new google.maps.InfoWindow({
        content: `
      <div dir="rtl" class="info-window">
        <h3>${d.name}</h3> 
        <ul>
          <li>${i18n.tableHeaders.status}: ${
          d.status === 'online' ? '&#10003;' : '&#215;'
        }</li>
      <li>${i18n.tableHeaders.code}: ${d.code}</li>
      <li>${i18n.tableHeaders.appVersion}: ${d.appVersion}</li>
      <li>${i18n.tableHeaders.aspectRatio}: ${d.aspectRatio}</li>
        </ul>
      </div>`,
        ariaLabel: d.code,
      });

      marker.addListener('click', () => {
        infowindow.open({
          anchor: marker,
          map,
        });
        setCurrentLocation(d);
      });
      return marker;
    });
    const renderer = {
      render: ({count, position}) => {
        return new google.maps.Marker({
          label: {
            text: String(count),
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '16px',
          },
          position,
          map,
          zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
        });
      },
    };
    new MarkerClusterer({markers, map, renderer});
  }
  useEffect(() => {
    async function init() {
      await initMap();
    }
    init();
  }, []);

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="main-wrapper">
        <div id="map" />
        <LocationsTable
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
        />
      </div>
    </main>
  );
}
