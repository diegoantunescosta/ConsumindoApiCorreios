import React from "react";

<<<<<<< HEAD
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
=======
function TrackingResult({ data }) {
  if (!data || !data.length === 0) return null;

>>>>>>> parent of a5f2d2d... result frontend
  return (
    <>
      <h1>Tracking Result</h1>
      <ul className="list-group">
        {data.map(item => {
          const { data, origem, destino, status } = item;

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