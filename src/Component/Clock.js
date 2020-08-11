import React, { useState, useEffect } from 'react';
import '../Weather.css';

const Clock = () => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div className="clock">
      <h2><span>{date.getHours()+2 < 10 ? '0' : ''}{date.getHours()}</span>
      <span className="small">H</span>
      <span>{date.getUTCMinutes() < 10 ? '0' : ''}{date.getUTCMinutes()}</span>
      <span className="small">M</span>
      <span>{date.getUTCSeconds() < 10 ? '0' : ''}{date.getUTCSeconds()}</span>
      <span className="small">S</span>
      </h2>
    </div>
  );

}

export default Clock;
