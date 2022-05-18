import React, { Component } from "react";

class InputBox extends Component {


  
  render() {
    
    return (
      <input
        placeholder={this.props.placeholder}
        type={this.props.type}
        className={`input_box ${this.props.height}`}
      ></input>
    );
  }
}

export default InputBox;
