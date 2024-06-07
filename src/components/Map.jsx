import {MarkerClusterer} from '@googlemaps/markerclusterer';
import {useEffect} from 'react';
import i18n from '../assets/i18n/he.json';

export default function Map({setCurrentLocation, data}) {
  async function initMap() {
    const {Map} = await google.maps.importLibrary('maps');
    await google.maps.importLibrary('marker');

    const startingPosition = {lat: 31.771959, lng: 35.217018};
    const map = createMap(startingPosition, Map);
    const markers = createMarkers(map);
    createMarkerClusterer(map, markers);
  }
  useEffect(() => {
    async function init() {
      await initMap();
    }
    init();
  });

  return <div id="map" />;

  // Helper functions
  function createMap(startingPosition, constructor) {
    const map = new constructor(document.getElementById('map'), {
      zoom: 7,
      center: startingPosition,
      mapId: 'DEMO_MAP_ID',
    });
    return map;
  }

  function createMarkers(map) {
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
    return markers;
  }

  function createMarkerClusterer(map, markers) {
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
}
