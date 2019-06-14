import React, { Component } from "react";
import CalculatorForm from "./CalculatorForm";
import ActionButtons from "./ActionButtons";

class Calculator extends Component {
  state = {
    currentStep: 1,
    shape: "",
    area: 0,
    shapes: ["circle", "ellipse", "square", "rectangle"]
  };

  setShape = shape => {
    this.setState({
      shape: shape
    });
  };

  setPrevStep = () => {
    let prevStep = this.state.currentStep > 1 ? this.state.currentStep - 1 : 1;

    this.setState({
      currentStep: prevStep
    });
  };

  setNextStep = () => {
    let nextStep = this.state.currentStep < 3 ? this.state.currentStep + 1 : 3;

    this.setState({
      currentStep: nextStep
    });
  };

  setStart = () => {
    this.setState({
      currentStep: 1
    });
  };

  calculateArea = (shape, x, y) => {
    let area = 0;
    const pi = 22 / 7;

    if (shape === "circle") {
      area = pi * (x / 2) * (x / 2);
    }

    if (shape === "rectangle") {
      area = x * y;
    }

    if (shape === "square") {
      area = x * x;
    }

    if (shape === "ellipse") {
      area = pi * x * y;
    }

    if (area > 0) {
      this.setState({
        area: area
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="wrapper">
          Wrapper Container
          <CalculatorForm
            setShape={this.setShape}
            state={this.state}
            calculateArea={this.calculateArea}
          />
          <ActionButtons
            state={this.state}
            setPrevStep={this.setPrevStep}
            setNextStep={this.setNextStep}
            setStart={this.setStart}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
