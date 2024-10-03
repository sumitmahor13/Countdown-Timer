import React, { useEffect, useState } from "react";

const Inputs = (props) => {

    const {setIsStart, hours, minutes, seconds, setHours, setMinutes, setSeconds} = props


    const handleStart = () => {
        if(hours < 0 || minutes < 0 && seconds <= 0 || hours==0 && minutes == 0 && seconds==0){
          alert("please enter Valid Timer")
          return;
        }else{
          setIsStart(true)
        }
    }

    const inputHandler = (e) => {
      console.log(e.target.id, e.target.value)
      const value =  JSON.parse(e.target.value);
      const id = e.target.id;
      console.log(id)

      if(id === 'hours'){
        setHours(value);
      }else if(id === 'minutes'){
        setMinutes(value)
      }else(
        setSeconds(value)
      )
    }

  return (
    <>
      <div>
        <div className="inputs-conatiner">
          <input id="hours" placeholder="H" onChange={inputHandler}></input>
          <div className="input-dots">:</div>
          <input id="minutes" placeholder="M" onChange={inputHandler}></input>
          <div className="input-dots">:</div>
          <input id="seconds" placeholder="S" onChange={inputHandler}></input>
        </div>
        <button onClick={handleStart}>Start</button>
      </div>
    </>
  );
};

export default Inputs;
