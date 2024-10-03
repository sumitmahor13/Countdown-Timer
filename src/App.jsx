import { useState, useEffect } from "react";
import "./App.css";
import Inputs from "./components/Inputs";
import Timer from "./components/Timer";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimeId] = useState(0)
  const [stop, setStop] = useState(false)

  console.log(hours, minutes, seconds)

  const runTimer = (hours, minutes, seconds, tid) => {

    if(seconds === 0 && minutes === 0 && hours === 0){
      setHours(0)
      setMinutes(0)
      setSeconds(0)
      return(()=>clearInterval(tid))
    }

    if(seconds>0){
      setSeconds((s)=> s-1);
    }else if(seconds === 0 && minutes > 0){
      setMinutes((m)=> m-1);
      setSeconds(59);
    }else if(minutes === 0){
      setHours((h)=> h-1);{
        setMinutes(59);
        setSeconds(59);
      }
    }
  }

  useEffect(()=>{
    let tid;
    if(isStart){
      tid = setInterval(()=>{
        runTimer(hours, minutes, seconds, tid)
      },1000)
      setTimeId(tid)
    }
    
    return(()=>clearInterval(tid))

  },[isStart, hours, minutes, seconds])

  return (
    <>
      <div className="app">
        <div>
          <h1>Countdown Timer</h1>
          {isStart ? (
            <Timer
              isStart={isStart}
              setIsStart={setIsStart}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              setHours={setHours}
              setMinutes={setMinutes}
              setSeconds={setSeconds}
              runTimer={runTimer}
              stop={stop}
              setStop={setStop}
              timerId={timerId}
            />
          ) : (
            <Inputs
              setIsStart={setIsStart}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              setHours={setHours}
              setMinutes={setMinutes}
              setSeconds={setSeconds}
              runTimer={runTimer}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
