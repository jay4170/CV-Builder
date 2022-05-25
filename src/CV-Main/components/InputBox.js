import React, { Component } from "react";

class InputBox extends Component {
 
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        type={this.props.type}
        className={`input_box ${this.props.height}`}
        onChange={this.props.handleChange}
        name={this.props.name}
        value={this.props.value}
      ></input>
    );
  }
}

export default InputBox;
