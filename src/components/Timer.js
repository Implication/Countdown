import React from "react";

const Timer = ({ min, sec }) => {
  return (
    <div>
      <span class="timer">
        {min}:{sec < 10 ? `0${sec}` : sec}
      </span>
    </div>
  );
};

export default Timer;
