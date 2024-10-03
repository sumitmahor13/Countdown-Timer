import React from "react";

const Timer = (props) => {
  const {
    runTimer,
    setIsStart,
    hours,
    minutes,
    seconds,
    setHours,
    setMinutes,
    setSeconds,
    stop,
    setStop,
    timerId,
  } = props;

  const handleReset = () => {
    setIsStart(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setStop(false)
  };

  const handleStop = () => {
    setStop(true);
    clearInterval(timerId);
  };

  const handleResume = () => {
    setStop(false);
    runTimer(hours, minutes, seconds);
  };
  return (
    <>
      <div>
        <div className="timer-display">
          <div>{hours < 10 ? `0${hours}` : hours}</div>
          <div>:</div>
          <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
          <div>:</div>
          <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
        </div>
        <div className="buttons">
          {stop ? (
            <button onClick={handleResume}>Resume</button>
          ) : (
            <button onClick={handleStop}>Stop</button>
          )}
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Timer;
