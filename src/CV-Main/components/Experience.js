import ArrowButt from "./ArrowButt";
import InputBox from "./InputBox";
import { Component } from "react";
import PlusButt from "./PlusButt";

class Experience extends Component {
  render() {
    return (
      <div>
        <div className="heading">
          <h3>Experience</h3>
          <ArrowButt />
        </div>
        <form>
          <InputBox placeholder={"Position"} type={"text"} height={"single"} />
          <InputBox
            placeholder={"Company"}
            type={"text"}
            height={"single"}
            handleChange={this.props.handleExperienceChange}
            value={this.value}
            name="company"
          />
          <InputBox
            placeholder={"City"}
            type={"text"}
            height={"single"}
            handleChange={this.props.handleExperienceChange}
            value={this.value}
            name="city"
          />
          <div>
            <label>From</label>
            <InputBox
              placeholder={"From"}
              type={"date"}
              height={"single"}
              handleChange={this.props.handleExperienceChange}
              value={this.value}
              name="expFrom"
            />
            <label>To</label>
            <InputBox
              placeholder={"To"}
              type={"date"}
              height={"single"}
              handleChange={this.props.handleExperienceChange}
              value={this.value}
              name="expTo"
            />
          </div>
        </form>
        <PlusButt />
      </div>
    );
  }
}

export default Experience;
