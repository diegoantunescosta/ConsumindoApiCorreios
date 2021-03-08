import React from 'react';


function TrackingEvents( {events}) {
  if (!events || !events.length) return null;
  return (
    <>
      <h4>Resultado:</h4>
      
      <ul className="list-group">
        {events.map(item => {
          console.log(events)
          const {$tipo, $hora,$status,$cidade,nome,numero,sigla,categoria } = item;
          return (
            <li key="{evento}" className="list-group-item">
              <span className="badge badge-primary">{categoria}</span>
              <span>Nome: {nome}</span>
              <span>Numero: {numero}</span>
              <span>Sigla: {sigla}</span>
              <span>Nome: {$tipo}</span>
              <span>Status: {$status}</span>
              <span>Data: key={$hora}</span>
              <span>Cidade: {$cidade}</span>
            </li>
          );
        })}
      </ul>
      </>
  );
}

export default TrackingEvents;