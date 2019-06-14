import React, { Component } from "react";
import ShapeSelectionForm from "./ShapeSelectionForm";
import ShapeDimensionForm from "./ShapeDimensionForm";
import Area from "./Area";
import ActionButtons from "./ActionButtons";

class AreaCalculatorForm extends Component {
  state = {
    step: 1,
    shape: "",
    diameter: 0,
    side: 0,
    length: 0,
    breadth: 0,
    axisA: 0,
    axisB: 0
  };

  // Proceed to the next step if not the final step
  nextStep = () => {
    let {
      step,
      shape,
      diameter,
      side,
      length,
      breadth,
      axisA,
      axisB
    } = this.state;

    let valueEntered =
      diameter !== 0 ||
      side !== 0 ||
      length !== 0 ||
      breadth !== 0 ||
      axisA !== 0 ||
      axisB !== 0;

    step =
      step < 3 && ((step === 2 && valueEntered) || (step === 1 && shape !== ""))
        ? step + 1
        : step;

    this.setState({
      step: step
    });
  };

  // Set the step to first step. Reset the shape and restart from step one.
  setStart = () => {
    let { step } = this.state;

    this.setState({
      step: 1,
      shape: ""
    });
  };

  // Handle change of the fields
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  // Set the shape in state from the value of radio button selected
  setShape = e => {
    this.setState({
      shape: e.target.value
    });
  };

  render() {
    const { step } = this.state;
    const { shape, diameter, side, length, breadth, axisA, axisB } = this.state;
    const values = { shape, diameter, side, length, breadth, axisA, axisB };

    switch (step) {
      case 1:
        return (
          <div>
            <ShapeSelectionForm setShape={this.setShape} shape={values.shape} />
            <ActionButtons
              step={step}
              nextStep={this.nextStep}
              startAgain={this.setStart}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <div>
              <h5>
                <b>Step 2 - Insert your values</b>
              </h5>
              <div className="mt-3">
                You have selected a {shape}, please input the required values
              </div>
            </div>
            <ShapeDimensionForm
              handleChange={this.handleChange}
              values={values}
            />
            <ActionButtons
              step={step}
              nextStep={this.nextStep}
              startAgain={this.setStart}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <Area values={values} />
            <ActionButtons step={step} startAgain={this.setStart} />
          </div>
        );
    }
  }
}

export default AreaCalculatorForm;
