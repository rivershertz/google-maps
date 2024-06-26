// import data from '../data.js';
// import i18n from '../assets/i18n/he.json';
// let map;
// export async function initMap() {
//   // The location of Jerusalem
//   const startingPosition = {lat: 31.771959, lng: 35.217018};
//   // Request needed libraries.
//   const {Map} = await google.maps.importLibrary('maps');
//   const {AdvancedMarkerElement} = await google.maps.importLibrary('marker');

//   // The map, centered at Jerusalem
//   map = new Map(document.getElementById('map'), {
//     zoom: 7,
//     center: startingPosition,
//     mapId: 'DEMO_MAP_ID',
//   });

//   // The marker, positioned at Jerusalem
//   data.forEach((d) => {
//     const iconImage = document.createElement('div');
//     iconImage.className = 'marker';
//     iconImage.style = `background: ${
//       d.status === 'online' ? 'green' : 'red'
//     }; `;
//     const marker = new google.maps.marker.AdvancedMarkerElement({
//       position: d.location,
//       map: map,
//       title: d.name,
//       content: iconImage,
//     });

//     const infowindow = new google.maps.InfoWindow({
//       content: `
//       <div dir="rtl" class="info-window">
//         <h3>${d.name}</h3>
//         <ul>
//           <li>${i18n.tableHeaders.status}: ${
//         d.status === 'online' ? '&#10003;' : '&#215;'
//       }</li>
//       <li>${i18n.tableHeaders.code}: ${d.code}</li>
//       <li>${i18n.tableHeaders.appVersion}: ${d.appVersion}</li>
//       <li>${i18n.tableHeaders.aspectRatio}: ${d.aspectRatio}</li>
//         </ul>
//       </div>`,
//       ariaLabel: d.code,
//     });

//     marker.addListener('click', () => {
//       infowindow.open({
//         anchor: marker,
//         map,
//       });
//     });
//   });
// }
