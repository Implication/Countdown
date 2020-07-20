import React from "react";

const Pause = ({ value, toggle }) => {
  return (
    <button class="btn btn-speed btn-pause" onClick={toggle}>
      {value}
    </button>
  );
};

export default Pause;
