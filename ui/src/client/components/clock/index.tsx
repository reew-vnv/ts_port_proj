import React, { useEffect } from 'react';
import './style.scss';

export const ClockComponent = () => {
  const setClock = () => {
    const hourHand = document.getElementById('hour')!;
    const minutesHand = document.getElementById('minutes')!;
    const secondsHand = document.getElementById('seconds')!;

    const now = new Date();
    const hour = (`0${now.getHours()}`).slice(-2);
    const minutes = (`0${now.getMinutes()}`).slice(-2);
    const seconds = (`0${now.getSeconds()}`).slice(-2);

    hourHand.innerHTML = String(hour);
    minutesHand.innerHTML = String(minutes);
    secondsHand.innerHTML = String(seconds);
  };

  useEffect(() => {
    setInterval(setClock, 1000);
    setClock();
  }, []);

  return (
    <div className="clock">
      <div id="hour" />
      :
      <div id="minutes" />
      :
      <div id="seconds" />
    </div>
  );
};
