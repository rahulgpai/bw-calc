import React from "react";

const NavButton = ({ name, classes, clickAction }) => {
  return (
    <button className={classes} onClick={clickAction}>
      {name}
    </button>
  );
};

export default NavButton;
