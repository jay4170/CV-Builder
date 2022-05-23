import ArrowButt from "./ArrowButt";
import InputBox from "./InputBox";
import { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div>
        <div className="heading">
          <h3>Personal Information</h3>
          <ArrowButt />
        </div>
        <form className="show">
          <InputBox
            placeholder={"First Name"}
            type={"text"}
            height={"single"}
          />
          <InputBox placeholder={"Last Name"} type={"text"} height={"single"} />
          <InputBox placeholder={"Title"} type={"text"} height={"single"} />
          <input id={"photo_upload"} name={"photo_upload"} type={"file"} />
          <InputBox placeholder={"Address"} type={"text"} height={"double"} />
          <InputBox
            placeholder={"Phone Number"}
            type={"number"}
            height={"single"}
          />
          <InputBox
            placeholder={"Email Address"}
            type={"email"}
            height={"single"}
          />
          <InputBox
            placeholder={"About You"}
            type={"text"}
            height={"quadriple"}
          />
        </form>
      </div>
    );
  }
}

export default Experience;
