import React from "react";

function TrackingResult({ events }) {
  if (!events || events.length === 0) return null;

  return (
    <>
      <h1>Tracking Result</h1>
      <ul className="list-group">
        {events.map(item => <li key={item.descricao}>{item.descricao}</li>)
          }
      </ul>
      
    </>
  );
}

export default TrackingResult;