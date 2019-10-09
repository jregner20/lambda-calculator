import React from "react";
/* Display a button element rendering the data being passed down from the parent container on props */
const NumberButton = props => {
  return (
    <button className="numButton">
      {props.text} 
    </button>
  );
};

export default NumberButton;

// onClick={() => props.numbers()}