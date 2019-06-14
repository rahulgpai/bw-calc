import React from "react";
import Circle from "./Circle";

const StepTwo = ({ setShape, state, calculateArea }) => {
  return (
    <div className="form-group">
      Hello
      <Circle calculateArea={calculateArea} />
    </div>
  );
};

export default StepTwo;
