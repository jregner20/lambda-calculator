import React from "react";

const SpecialButton = ({special}) => {
  return (
    < button className="specButton">
     {special}
    </button>
  );
};

export default SpecialButton;


// onClick={() => props.specials()}