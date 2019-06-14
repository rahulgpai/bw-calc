import React from "react";

const ShapeSelectionForm = ({ setShape, shape }) => {
  return (
    <div>
      <form action="#" className="shapeSelect">
        <div>
          <h5>
            <b>Step 1 - Select Your Shape</b>
          </h5>
        </div>
        <div className="left-align">
          <label>
            <input
              type="radio"
              name="shape"
              value="rectangle"
              checked={shape === "rectangle"}
              onChange={setShape}
            />
            <span className="">Rectangle</span>
          </label>
        </div>
        <div className="left-align">
          <label>
            <input
              type="radio"
              name="shape"
              value="circle"
              checked={shape === "circle"}
              onChange={setShape}
            />
            <span className="">Circle</span>
          </label>
        </div>
        <div className="left-align">
          <label>
            <input
              type="radio"
              name="shape"
              value="square"
              checked={shape === "square"}
              onChange={setShape}
            />
            <span>Square</span>
          </label>
        </div>
        <div className="left-align">
          <label>
            <input
              type="radio"
              name="shape"
              value="ellipse"
              checked={shape === "ellipse"}
              onChange={setShape}
            />
            <span>Ellipse</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default ShapeSelectionForm;
