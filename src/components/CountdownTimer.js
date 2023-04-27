import React, { useEffect, useState } from 'react';

const CountdownTimer = (props) => {
  const [timeLeft, setTimeLeft] = useState(props.duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor((timeLeft / (60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 60) % 60);
  const seconds = Math.floor(timeLeft % 60);
  return (
    <div className="count text-center">
      <h1 id="headline">Countdown to go Live !</h1>
      <div id="countdown">
        <div id="countdown">
          <ul>
            <li>
              <span id="days"> {days}</span>days
            </li>
            <li>
              <span id="hours"> {hours}</span>Hours
            </li>
            <li>
              <span id="minutes"> {minutes}</span>Minutes
            </li>
            <li>
              <span id="seconds"> {seconds}</span>Seconds
            </li>
          </ul>
        </div>
      </div>
      <div id="content" className="golive">
        <span>Test</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
