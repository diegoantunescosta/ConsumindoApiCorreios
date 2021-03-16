import React from 'react';


function TrackingEvents( {events}) {
  if (!events || !events.tracks) return null;
  return (
    <>
      <h4>Resultado:</h4>
      
      <ul className="list-group">
        {events.tracks.map(item => {
          console.log(events)
          const { } = item;
          console.log(item.tracks)
          return (
            <li key="{index}" className="list-group-item">
              <span>Locale: {item.locale}</span>
              <span>observation: {item.observation}</span>
              <span>Status: {item.status}</span>                      
              <span>trackeAt: {item.trackedAt}</span>
             
              
              
            </li>
          );
        })}
      </ul>
      </>
  );
}

export default TrackingEvents;