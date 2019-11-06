import React from "react";

const NumberButton = props => {
  return (
    <button className="numButton">
      {props.text}
    </button>
  );
};

export default NumberButton;