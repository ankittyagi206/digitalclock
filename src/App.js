import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const time = new Date().toLocaleTimeString();
  const [Newtime, setNewTime] = useState(time);
  const getNewTime = () => {
    let getCurrentTime;
    getCurrentTime = new Date().toLocaleTimeString();
    setNewTime(getCurrentTime);
  };
  setInterval(getNewTime, 1000);

  return (
    <div className="container">
      <h1 className="clock">{Newtime}</h1>
      <p className="quote">"</p>
      <h2>Start where you are. Use what you have. Do what you can."</h2>
      <h3>-Ankit Tyagi</h3>
    </div>
  );
};
export default App;
