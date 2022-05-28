import InputBox from "./InputBox";
import { Component } from "react";
import PlusButt from "./PlusButt";

class Education extends Component {
  render() {
    return (
      <div>
        <div className="heading">
          <h3>Education</h3>
        </div>
        <form>
          <InputBox
            placeholder={"Course"}
            type={"text"}
            height={"single"}
            handleChange={this.props.handleEducationChange}
            value={this.value}
            name="course"
          />
          <InputBox
            placeholder={"Institution"}
            type={"text"}
            height={"single"}
            handleChange={this.props.handleEducationChange}
            value={this.value}
            name="school"
          />
          <InputBox
            placeholder={"City"}
            type={"text"}
            height={"single"}
            handleChange={this.props.handleEducationChange}
            value={this.value}
            name="city"
          />
          <div>
            <label>From</label>
            <InputBox
              placeholder={"From"}
              type={"date"}
              height={"single"}
              handleChange={this.props.handleEducationChange}
              value={this.value}
              name="eduFrom"
            />
            <label>To</label>
            <InputBox
              placeholder={"To"}
              type={"date"}
              height={"single"}
              handleChange={this.props.handleEducationChange}
              value={this.value}
              name="eduTo"
            />
          </div>
        </form>
        <PlusButt clickHandler={this.plusButtonClickHandler} />
      </div>
    );
  }
}

export default Education;
