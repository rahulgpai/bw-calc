import React from "react";

const Circle = ({ calculateArea }) => {
  return (
    <div>
      <label htmlFor="diameter">Enter the diameter</label>
      <input
        type="text"
        name="diameter"
        id="diameter"
        onChange={calculateArea}
      />
    </div>
  );
};

export default Circle;
