import React, { Component } from "react";
import PersonalSection from "./components/PersonalSection";

class CVMirror extends Component {
  constructor(props) {
    super(props);
    const personalInfo = this.props.cvInfo.personalInfo;
    const experienceInfo = this.props.cvInfo.experienceInfo;
    const educationInfo = this.props.cvInfo.educationInfo;
    
  }

  render() {
    return (
      <div>
        <PersonalSection personalInfo={this.props.cvInfo.personalInfo} />
        <h3>Person Info</h3>
        <div>Education</div>
      </div>
    );
  }
}

export default CVMirror;
