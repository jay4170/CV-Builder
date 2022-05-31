import React from "react";
import plus from "../../images/plus.png";
import "./PlusButt.css";

const PlusButt = (props) => {
  return (
    <button onClick={props.clickHandler} className="plus_button">
      <img src={plus} className="plus_img" alt="" />
    </button>
  );
};

export default PlusButt;
