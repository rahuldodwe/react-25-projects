import React, { useState } from "react";

const StepProgressBar = ({ steps, activeStep, setActiveStep }) => {

  handlePreviousStep() {

  }
  handleNextStep() {
    
  }

  return (
    <div>
      <div className="steps">
        {steps.map((stepItem, index) => (
          <div key={index}>{stepItem}</div>
        ))}
      </div>
      <div className="step-buttons-wrapper">
        <button onClick={handlePreviousStep}>Previous Step</button>
        <button onClick={handleNextStep}>Next Step</button>
      </div>
    </div>
  );
};

export default StepProgressBar;
