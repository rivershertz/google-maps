import data from '../../data';
import i18n from '../../assets/i18n/he.json';
import './style.css';
import {useEffect} from 'react';
export default function LocationsTable({currentLocation, setCurrentLocation}) {
  useEffect(() => {
    const el = document.getElementById(currentLocation.code);
    if (!el) return;
    el.scrollIntoView({behavior: 'smooth', block: 'center'});
  }, [currentLocation]);
  return (
    <>
      <div className="table-wrapper">
        <table
          dir="rtl"
          className="table">
          <thead>
            <tr>
              {Object.values(i18n.tableHeaders).map((tableHeader) => (
                <th key={tableHeader}>{tableHeader}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((location) => (
              <tr
                id={location.code}
                key={location.id}
                onClick={() => setCurrentLocation(location)}
                style={
                  currentLocation.id === location.id
                    ? {backgroundColor: 'rgb(228, 228, 228)'}
                    : {}
                }>
                <td>{location.name}</td>
                <td>
                  <div
                    className="status"
                    style={{
                      backgroundColor:
                        location.status === 'online' ? 'green' : 'red',
                    }}
                  />
                </td>
                <td>{location.code}</td>
                <td>{location.appVersion}</td>
                <td>{location.aspectRatio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
