import React, { Component } from "react";

class SubmitResetButtons extends Component {
  render() {
    return (
      <div>
        <button>Print</button>
        <button onClick={this.props.resetOptions}>Reset</button>
        <button onClick={this.props.exampleOptions}>Example</button>
      </div>
    );
  }
}

export default SubmitResetButtons;
