import React from "react";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import PersonalSection from "./components/PersonalSection";
import "./CVPreview.css";
import { v4 as uuidv4 } from "uuid";

const CVPreview = (props) => {
  const personalInfo = props.cvInfo.personalInfo;
  const experienceInfo = props.cvInfo.experienceInfo;
  const educationInfo = props.cvInfo.educationInfo;

  return (
    <div className="CV_mirror_main">
      <h1 className="mirror_heading">CV Preview</h1>
      <h3>Personal Info</h3>
      <PersonalSection className="indent" personalInfo={personalInfo} />
      <h2 className="margin_top">Work Experience</h2>
      {experienceInfo.map((infos) => {
        return <ExperienceSection key={uuidv4()} experienceInfo={infos} />;
      })}
      <h2 className="margin_top">Education</h2>
      {educationInfo.map((infos) => {
        return <EducationSection key={uuidv4()} educationInfo={infos} />;
      })}
    </div>
  );
};

export default CVPreview;
