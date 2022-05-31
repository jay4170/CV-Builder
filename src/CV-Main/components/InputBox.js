import React from "react";

const InputBox = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      className={`input_box ${props.height}`}
      onChange={props.handleChange}
      name={props.name}
    ></input>
  );
};

export default InputBox;
