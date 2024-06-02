import data from '../data.js';
let map;
export async function initMap() {
  // The location of Jerusalem
  const startingPosition = {lat: 31.771959, lng: 35.217018};
  // Request needed libraries.
  const {Map} = await google.maps.importLibrary('maps');
  const {AdvancedMarkerElement} = await google.maps.importLibrary('marker');

  // The map, centered at Jerusalem
  map = new Map(document.getElementById('map'), {
    zoom: 7,
    center: startingPosition,
    mapId: 'DEMO_MAP_ID',
  });

  // The marker, positioned at Jerusalem
  data.forEach((d) => {
    const marker = new google.maps.marker.AdvancedMarkerElement({
      position: d.location,
      map: map,
      title: d.name,
    });
  });
}
