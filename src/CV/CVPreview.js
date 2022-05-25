import React, { Component } from "react";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import PersonalSection from "./components/PersonalSection";
import "./CVPreview.css";

class CVPreview extends Component {


  render() {
    const personalInfo = this.props.cvInfo.personalInfo;
    const experienceInfo = this.props.cvInfo.experienceInfo;
    const educationInfo = this.props.cvInfo.educationInfo;

    return (
      <div className="CV_mirror_main">
        <h1 className="mirror_heading">CV Preview</h1>
        <h3>Personal Info</h3>
        <PersonalSection className="indent" personalInfo={personalInfo} />
        <h2 className="margin_top">Work Experience</h2>
        <ExperienceSection experienceInfo={experienceInfo} />
        <h2 className="margin_top">Education</h2>
        <EducationSection educationInfo={educationInfo} />
      </div>
    );
  }
}

export default CVPreview;
