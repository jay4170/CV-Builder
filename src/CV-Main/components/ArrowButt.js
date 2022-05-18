import React, { Component } from "react";
import arrow from "../../images/arrow.png";
import "./ArrowButt.css"
class ArrowButt extends Component {
  render() {
    return (
      <button className="arrow_button">
        <img src={arrow} className="arrow_img" alt=""/>
      </button>
    );
  }
}

export default ArrowButt;
