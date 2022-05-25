import React, { Component } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";
import SubmitResetButtons from "./components/SubmitResetButtons";
import "./CVMain.css";

class CVMain extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="CV_main">
        <h1 className="CV_heading">Your information</h1>
        <PersonalInfo handlePersonalChange={this.props.handlePersonalChange} />
      
        <Experience
          handleExperienceChange={this.props.handleExperienceChange}
        />
        <Education handleEducationChange={this.props.handleEducationChange} />
        <SubmitResetButtons
          resetOptions={this.props.resetOptions}
          exampleOptions={this.props.exampleOptions}
        />
      </div>
    );
  }
}

export default CVMain;
