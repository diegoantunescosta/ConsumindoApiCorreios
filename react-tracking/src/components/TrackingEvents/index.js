import React from 'react';


function TrackingEvents( {events}) {
  if (!events || !events.length) return null;
  return (
    <>
      <h4>Resultado:</h4>
      
      <ul className="list-group">
        {events.map(item => {
          const { tipo, data, hora,categoria } = item;
          return (
            <li key="{result}" className="list-group-item">
              <span className="badge badge-primary">{categoria}</span>
              <span>Data: {tipo}</span>
              <span>Destino: {data}</span>
              <span>Status: {hora}</span>
            </li>
          );
        })}
      </ul>
      </>
  );
}

export default TrackingEvents;