import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import Pause from "./components/Pause";

/*
Notes to whoever is reviewing my code:
The  Time's Up box that is supposed to be rendered when the timer is at 0 for some reason is not working for my application, not sure why,
But the attempted code written for it can be found in line 33, essentially within my close out condition

The Minute feature does have a minor bug to it, as the input is of a type display, if a user backspaces out from the text, it will show NaN unde the text,
Furthermore, To make this a productuion ready applicaiton, I disabled the input bar when a user presses start, to prevent them from tampering with the timer,
as this was causing a bug where the number could increase while it was moving,All code for this, can be found in the useEffect hook.

I used Play/Pause text, instead of the icon display, 
All Styling for this project can be found in the index.css folder, no library stylings were used.

For the blink I used a css method instead of going with javascript, this can be found under the class blink

Their is a bug with the pause button wtih the method that I used in order to activate the timer, if the pause button is pressed before from my side it caused some errors.
I used conditional rendering in order to display the text that will change color, and is supposed to change messages for the top.

**/

function App() {
  //Declarative variables
  let [min, setMin] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [isPaused, setPaused] = useState(true);
  let [timerStarted, setTimerStarted] = useState(false);
  let [isHalf, setHalf] = useState(false);
  let [speed, setSpeed] = useState(1000);
  let [displayMessage, setDisplayMessage] = useState("Time's Up!");
  let interval = null;
  let halfway = null;
  let [buttonState, setButtonState] = useState("Pause");

  //Use Effect/Persistent variables
  useEffect(() => {
    let minutes = document.querySelector("#minuteInput");
    minutes = parseInt(minutes.value);
    halfway = minutes;

    //Essentially this will activate the timer, when the start button is pressed by a toggler through using react useState Hooks
    if (!isPaused) {
      interval = setInterval(() => {
        document.querySelector("#minuteInput").disabled = true;
        //Interval that starts when start button is checked
        if (seconds === 0) {
          if (min === 0) {
            setDisplayMessage((displayMessage) => "Time's up");
            setPaused(true);
            document.querySelector("#minuteInput").disabled = false;
            document.querySelector(".timer").classList.remove("blink");
            document.querySelector(".displayMessage").remove("red");
            clearInterval(interval);
            return;
          } else {
            setMin((min) => min - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((seconds) => seconds - 1);
        }
        //Halfway Check in interval
        if (minutes / 2 >= min && seconds === 0 && minutes % 2 === 0) {
          setDisplayMessage("More than halfway there!");
        }
        if (minutes / 2 >= min && seconds <= 30 && minutes % 2 !== 0) {
          setHalf(true);
          setDisplayMessage("More than halfway there!");
        }
        if (min === 0 && seconds <= 20) {
          document.querySelector(".displayMessage").classList.add("red");
        }
        //Blinker when seconds reach 10 seconds
        if (min === 0 && seconds <= 10) {
          document.querySelector(".timer").classList.add("blink");
        }
      }, speed);
    }
    return () => {
      clearInterval(interval);
    };
    console.log("Check");
  }, [isPaused, min, seconds, interval, displayMessage, setHalf]);

  //Function Purpose, essentially an event listener that toggles the pause boolean to false
  function startTimer(e) {
    setPaused(false);
  }

  //Event listener that grabs the variable in out input text box
  function getMinutes(e) {
    if (e.target.value !== "") {
      setMin(parseInt(e.target.value));
    } else {
      setMin(0);
    }
  }

  //This function allows us to change the speed of how fast the intervals change.
  function Speed(value) {
    setSpeed(value);
  }

  function toggle() {
    setPaused(!isPaused);
    if (!isPaused) {
      setButtonState("Pause");
    } else {
      setButtonState("Play");
    }
  }

  //UI Display
  return (
    <div class="container">
      <div class="top">
        <label>Countdown:</label>
        <input
          type="number"
          placeholder="(min)"
          id="minuteInput"
          onChange={getMinutes}></input>
        <button class="btn btn-row btn-start" onClick={startTimer}>
          Start
        </button>
      </div>
      {isHalf ? <p class="displayMessage">{displayMessage}</p> : <br />}
      <Timer min={min} sec={seconds} />
      <Pause value={buttonState} toggle={toggle} />
      <button class="btn btn-row btn-speed" onClick={() => Speed(1000)}>
        1x
      </button>
      <button class="btn btn-row btn-speed" onClick={() => Speed(666)}>
        1.5x
      </button>
      <button class="btn btn-row btn-speed" onClick={() => Speed(333)}>
        2x
      </button>
    </div>
  );
}

export default App;
