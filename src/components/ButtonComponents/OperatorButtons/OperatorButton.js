import React from "react";

const OperatorButton = props => {
  return (
    <button className="operButton" onClick={() => props.operator()}>
      {props.operatorText}
    </button>
  );
};

export default OperatorButton;