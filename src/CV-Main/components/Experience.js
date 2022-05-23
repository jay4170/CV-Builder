import ArrowButt from "./ArrowButt";
import InputBox from "./InputBox";
import { Component } from "react";

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
          />{" "}
          <InputBox placeholder={"City"} type={"text"} height={"single"} />{" "}
          <div>
            <label>From</label>
            <InputBox placeholder={"From"} type={"date"} height={"single"} />
            <label>To</label>
            <InputBox placeholder={"To"} type={"date"} height={"single"} />
          </div>
        </form>
      </div>
    );
  }
}

export default Experience;
