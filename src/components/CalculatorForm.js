import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const CalculatorForm = ({ setShape, state, calculateArea }) => {
  return (
    <div>
      <StepOne setShape={setShape} state={state} />
      <StepTwo
        setShape={setShape}
        state={state}
        calculateArea={calculateArea}
      />
    </div>
  );
};

export default CalculatorForm;
