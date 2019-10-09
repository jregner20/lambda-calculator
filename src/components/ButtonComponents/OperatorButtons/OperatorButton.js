import React from "react";


const OperatorButton = ({text}) => {
  return (
    <button className="operButton">
      {text.char}
    </button>
  );
};

export default OperatorButton;


// onClick={() => props.operators()}