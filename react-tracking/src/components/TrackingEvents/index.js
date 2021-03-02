import React from "react";

function TrackingEvents( {events}) {
  if (!events || events.length === 0) return null;
  console.log (
    <>
    <ul>
      <h1>"test"</h1>
      {events.map(item => <li key={item.descricao}>{item.descricao}</li>)}
    </ul>
    </>
 );
}

export default TrackingEvents;