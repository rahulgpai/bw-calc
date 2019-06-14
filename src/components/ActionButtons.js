import React from "react";
import NavButton from "./NavButton";

const ActionButtons = ({ step, nextStep, startAgain }) => {
  let classesNext = "btn btn-primary left";
  let classesStart = "btn btn-primary left";
  let classesCancel = "btn btn-primary right";

  switch (step) {
    case 1:
      return (
        <div className="actionButtons">
          <NavButton name="Next" classes={classesNext} clickAction={nextStep} />
          <NavButton
            name="Cancel"
            classes={classesCancel}
            clickAction={startAgain}
          />
        </div>
      );
    case 2:
      return (
        <div className="actionButtons">
          <NavButton name="Next" classes={classesNext} clickAction={nextStep} />
          <NavButton
            name="Cancel"
            classes={classesCancel}
            clickAction={startAgain}
          />
        </div>
      );
    case 3:
      return (
        <div className="actionButtons">
          <NavButton
            name="Start over"
            classes={classesStart}
            clickAction={startAgain}
          />
        </div>
      );
  }

  return <div className="card-footer" />;
};

export default ActionButtons;
