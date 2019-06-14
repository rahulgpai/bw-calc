import React from "react";

const Area = ({ values }) => {
  const pi = 3.14;
  const shape = values.shape;
  const radius = values.diameter / 2;
  const side = values.side;
  const length = values.length;
  const breadth = values.breadth;
  const axisA = values.axisA;
  const axisB = values.axisB;

  let area = 0;

  if (shape === "") {
    return null;
  }

  switch (shape) {
    case "circle":
      area = pi * radius * radius;
      break;
    case "square":
      area = side * side;
      break;
    case "ellipse":
      area = pi * axisA * axisB;
      break;
    case "rectangle":
      area = length * breadth;
      break;
  }

  return (
    <div>
      <h5>
        <b>Step 3 - Your Results</b>
      </h5>
      <p className="areaText">
        You have calculated the area of {shape} to be {area}. Below is your
        result:
      </p>
      <p className="areaResult">The area is {area} sq. units</p>
    </div>
  );
};

export default Area;
