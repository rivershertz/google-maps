import data from '../../data';
import i18n from '../../assets/i18n/he.json';
import './style.css';
export default function LocationsTable() {
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
              <tr key={location.id}>
                <td>{location.name}</td>
                <td>{location.status}</td>
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
