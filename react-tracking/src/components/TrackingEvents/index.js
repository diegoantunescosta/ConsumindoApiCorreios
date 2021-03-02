import React from "react";

<<<<<<< HEAD
function TrackingEvents( {events}) {
  if (!events || events.length === 0) return null;
  console.log (
    <>
    <ul>
      <h1>"test"</h1>
      {events.map(item => <li key={item.descricao}>{item.descricao}</li>)}
    </ul>
=======
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
>>>>>>> parent of 36b1dc3... front result 2
    </>
 );
}

export default TrackingEvents;