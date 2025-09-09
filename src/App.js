import React, { useState, useEffect } from "react";
import "./App.css";

// Generic circular counter hook
function useCounter(max, onOverflow) {
  const [value, setValue] = useState(0);

  const tick = () => {
    setValue((prev) => {
      if (prev + 1 >= max) {
        onOverflow && onOverflow(); // notify next counter
        return 0;
      }
      return prev + 1;
    });
  };

  return [value, tick];
}

function Clock() {
  const [hours, tickHours] = useCounter(24);
  const [minutes, tickMinutes] = useCounter(60, tickHours);
  const [seconds, tickSeconds] = useCounter(60, tickMinutes);

  // start ticking seconds
  useEffect(() => {
    const interval = setInterval(() => {
      tickSeconds();
    }, 1000);
    return () => clearInterval(interval);
  }, [tickSeconds]);

  // calculate analog clock hand angles
  const secondAngle = seconds * 6; // 360 / 60
  const minuteAngle = minutes * 6 + seconds * 0.1; // smooth move
  const hourAngle = (hours % 12) * 30 + minutes * 0.5; // 360 / 12 = 30

  return (
    <div className="clock-container">
      {/* Digital */}
      <div className="digital">
        {String(hours).padStart(2, "0")}:
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </div>

      {/* Analog */}
      <div className="analog">
        <div className="hand hour" style={{ transform: `rotate(${hourAngle}deg)` }}></div>
        <div className="hand minute" style={{ transform: `rotate(${minuteAngle}deg)` }}></div>
        <div className="hand second" style={{ transform: `rotate(${secondAngle}deg)` }}></div>
        {/* clock center dot */}
        <div className="center-dot"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2>⏰ React Analog + Digital Clock</h2>
      <Clock />
    </div>
  );
}

export default App;
