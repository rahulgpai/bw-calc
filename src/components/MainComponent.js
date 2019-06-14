import React from "react";
import Logo from ".././BWLogo.png";
import LeftBlock from "./LeftBlock";
import AreaCalculatorForm from "./AreaCalculatorForm";
import RightBlock from "./RightBlock";

const MainComponent = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <div>
            <img src={Logo} className="Header-Logo" alt="Bombay Works Logo" />
          </div>
        </div>
        <div className="wrapper">
          <div className="body">
            <div className="blockone">
              <LeftBlock />
            </div>
            <div className="blocktwo background">
              <AreaCalculatorForm />
            </div>
            <div className="blockthree">
              <RightBlock />
            </div>
          </div>
          <div className="footer">bombayworks.com</div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
