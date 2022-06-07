import React from "react";

const SubmitResetButtons = (props) => {
  return (
    <div>
      <button className="sre_buttons" onClick={props.handlePrint}>Print</button>
      <button className="sre_buttons" onClick={props.resetOptions}>
        Reset
      </button>
      <button className="sre_buttons" onClick={props.exampleOptions}>
        Example
      </button>
    </div>
  );
};

export default SubmitResetButtons;
