import React from "react";

function TrackingResult({ events }) {
  if (!events || !events.length === 0) return null;
  console.log('if ok')
  return (
    <>
      <h1>Tracking Result</h1>
      <ul className="list-group">
        {events.map(item => {
          const { data, origem, destino, status } = item;
console.log('ul ok')
          return (
            <li key={status} className="list-group-item">
              <span className="badge badge-primary">{origem}</span>
              <span>data: {data}</span>
              <span>destino: {destino}</span>
              <span>status: {status}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TrackingResult;