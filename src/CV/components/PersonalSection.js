import React, { Component } from "react";

export default class PersonalSection extends Component {
  constructor(props) {
    super(props);
    const info = props.personalInfo;
  }
  render() {
    return <div>{this.props.first}</div>;
  }
}
