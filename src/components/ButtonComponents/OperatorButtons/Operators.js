import React, {useState} from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

export default function Operators() {
  const [operState, setOpState] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {
        operators.map((elem, index) => {
          return (
            < OperatorButton key = {index} text = {elem}/>
          )
        })
      }
    </div>
  );
};