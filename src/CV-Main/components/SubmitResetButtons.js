import React from "react";

const SubmitResetButtons = (props) => {
  return (
    <div>
      <button>Print</button>
      <button onClick={props.resetOptions}>Reset</button>
      <button onClick={props.exampleOptions}>Example</button>
    </div>
  );
};

export default SubmitResetButtons;
