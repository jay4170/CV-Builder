import InputBox from "./InputBox";
import { Component } from "react";
import PlusButt from "./PlusButt";

const Experience = (props) => {
  return (
    <div>
      <div>
        <h3>Experience</h3>
      </div>
      <form>
        <InputBox
          placeholder={"Position"}
          type={"text"}
          height={"single"}
          handleChange={props.handleExperienceChange}
          name="position"
        />
        <InputBox
          placeholder={"Company"}
          type={"text"}
          height={"single"}
          handleChange={props.handleExperienceChange}
          name="company"
        />
        <InputBox
          placeholder={"City"}
          type={"text"}
          height={"single"}
          handleChange={props.handleExperienceChange}
          name="city"
        />
        <div>
          <label>From</label>
          <InputBox
            placeholder={"From"}
            type={"date"}
            height={"single"}
            handleChange={props.handleExperienceChange}
            name="expFrom"
          />
          <label>To</label>
          <InputBox
            placeholder={"To"}
            type={"date"}
            height={"single"}
            handleChange={props.handleExperienceChange}
            name="expTo"
          />
        </div>
      </form>
      <PlusButt />
    </div>
  );
};

export default Experience;
