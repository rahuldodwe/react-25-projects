import React from "react";
import CountdownTimer from ".";
import "./timer.css";

const CountdownTimerTest = () => {
  function handleTimeFinish() {
    console.log(
      "Once the timer is finished I want to make an api call and save some data to database"
    );
  }

  return (
    <div className="countdown-timer-container">
      <h1>19. CountDown Timer</h1>
      <CountdownTimer intialTime={120} onTimeFinish={handleTimeFinish} />
    </div>
  );
};

export default CountdownTimerTest;
