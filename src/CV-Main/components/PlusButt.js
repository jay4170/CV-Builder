import React, { Component } from "react";
import plus from "../../images/plus.png";
import "./PlusButt.css";

class PlusButt extends Component {
  render() {
    return (
      <button onClick={this.props.clickHandler} className="plus_button">
        <img src={plus} className="plus_img" alt="" />
      </button>
    );
  }
}

export default PlusButt;
