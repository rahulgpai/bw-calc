import React from "react";

const InputField = ({ type, name, classes, action }) => {
  return (
    <div className="row">
      <input
        type={type}
        name={name}
        id={name}
        className={classes}
        onChange={action}
      />
    </div>
  );
};

export default InputField;
