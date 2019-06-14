import React from "react";

const ActionButtons = ({ state, setPrevStep, setNextStep, setStart }) => {
  return (
    <div className="inline block">
      <div className="footer">
        <div className="row">
          <button className="btn btn-primary left" onClick={setPrevStep}>
            Previous
          </button>
          <button className="btn btn-primary right" onClick={setNextStep}>
            Next
          </button>
        </div>
        <div className="row" />
        <button className="btn btn-primary right" onClick={setStart}>
          Start over again...
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
