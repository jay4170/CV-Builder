import React, { Component } from "react";

export default class ExperienceSection extends Component {

  render() {
    const info = this.props.experienceInfo;
    return (
      <div>
        <h4>Position: {info.position}</h4>
        <h4>Company: {info.company}</h4>
        <h4>City: {info.city}</h4>
        <div>
          <h4>
            From {info.expFrom} To {info.expTo}
          </h4>
        </div>
      </div>
    );
  }
}
