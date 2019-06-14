import React from "react";

const StepOne = ({ setShape, state }) => {
  let shapesForm = state.shapes.map(shape => {
    return (
      <div className="row" key={shape}>
        <label htmlFor={shape}>{shape}</label>
        <input
          type="radio"
          name="shape"
          value={shape}
          checked={state.shape === shape}
          onChange={() => {
            setShape(shape);
          }}
        />
      </div>
    );
  });

  return <div className="form-group">{shapesForm}</div>;
};

export default StepOne;
