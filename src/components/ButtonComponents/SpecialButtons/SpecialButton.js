import React from "react";

const SpecialButton = props => {
  return (
    < button className="specButton" onClick={() => props.special()}>
      {props.specialsText}
    </button>
  );
};

export default SpecialButton;