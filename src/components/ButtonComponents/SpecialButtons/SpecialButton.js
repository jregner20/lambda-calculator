import React from "react";

const SpecialButton = props => {
  return (
    <button className="specButton">
      {props.text}
    </button>
  );
};

export default SpecialButton;