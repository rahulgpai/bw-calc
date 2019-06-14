import React from "react";
import InputField from "./InputField";

const ShapeDimensionForm = ({ values, handleChange }) => {
  if (values.shape === "") {
    return null;
  }

  switch (values.shape) {
    case "circle":
      return (
        <div>
          <b>Diameter:</b>
          <InputField
            type="text"
            name="diameter"
            classes="form-input-field"
            event="onClick"
            action={handleChange}
          />
        </div>
      );

    case "ellipse":
      return (
        <div>
          <b>Width:</b>
          <InputField
            type="text"
            name="axisA"
            classes="form-input-field"
            event="onClick"
            action={handleChange}
          />
          <b>Height:</b>
          <InputField
            type="text"
            name="axisB"
            classes="form-input-field"
            event="onClick"
            action={handleChange}
          />
        </div>
      );

    case "square":
      return (
        <div>
          <b>Width:</b>
          <InputField
            type="text"
            name="side"
            classes="form-input-field"
            event="onClick"
            action={handleChange}
          />
        </div>
      );

    case "rectangle":
      return (
        <div>
          <b>Height:</b>
          <InputField
            type="text"
            name="length"
            classes="form-input-field"
            event="onClick"
            action={handleChange}
          />
          <b>Width:</b>
          <InputField
            type="text"
            name="breadth"
            classes="form-input-field"
            event="onClick"
            action={handleChange}
          />
        </div>
      );
  }
};

export default ShapeDimensionForm;
