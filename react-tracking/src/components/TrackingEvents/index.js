import React from 'react';


function TrackingEvents( {events}) {
  if (!events || !events.length) return null;
  return (
    <>
      <h4>Resultado:</h4>
      
      <ul className="list-group">
        {events.map(item => {
          console.log(events)
          const { } = item;
          console.log(item.evento)
          return (
            <li key="{index}" className="list-group-item">
              <span>Data: {}</span>
              <span>Cidade: {}</span>
              <span>Nome: {}</span>                      
              <span>Descrição: {}</span>
              <span>Hora: {}</span>
              
              
            </li>
          );
        })}
      </ul>
      </>
  );
}

export default TrackingEvents;