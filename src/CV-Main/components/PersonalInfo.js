import InputBox from "./InputBox";
import { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="heading">
          <h3>Personal Information</h3>
        </div>
        <form className="show">
          <InputBox
            placeholder={"First Name"}
            type={"text"}
            height={"single"}
            handleChange={this.props.handlePersonalChange}
            value={this.value}
            name="first"
          />
          <InputBox
            placeholder={"Last Name"}
            type={"text"}
            height={"single"}
            handleChange={this.props.handlePersonalChange}
            value={this.value}
            name="last"
          />
          <InputBox
            placeholder={"Title"}
            type={"text"}
            height={"single"}
            handleChange={this.props.handlePersonalChange}
            value={this.value}
            name="title"
          />
          <input id={"photo_upload"} name={"photo_upload"} type={"file"} />
          <InputBox
            placeholder={"Address"}
            type={"text"}
            height={"double"}
            handleChange={this.props.handlePersonalChange}
            value={this.value}
            name="address"
          />
          <InputBox
            placeholder={"Phone Number"}
            type={"number"}
            height={"single"}
            handleChange={this.props.handlePersonalChange}
            value={this.value}
            name="phone"
          />
          <InputBox
            placeholder={"Email Address"}
            type={"email"}
            height={"single"}
            handleChange={this.props.handlePersonalChange}
            value={this.value}
            name="email"
          />
          <InputBox
            placeholder={"About You"}
            type={"text"}
            height={"quadriple"}
            handleChange={this.props.handlePersonalChange}
            value={this.value}
            name="about"
          />
        </form>
      </div>
    );
  }
}

export default Experience;
