import React from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";
import SubmitResetButtons from "./components/SubmitResetButtons";
import "./CVMain.css";

const CVMain = (props) => {
  return (
    <div className="CV_main">
      <div>
        <h1 className="CV_heading">Your information</h1>
        <PersonalInfo handlePersonalChange={props.handlePersonalChange} />

        <Experience handleExperienceChange={props.handleExperienceChange} />
        <Education handleEducationChange={props.handleEducationChange} />
  
        <SubmitResetButtons
          handlePrint={props.handlePrint}
          resetOptions={props.resetOptions}
          exampleOptions={props.exampleOptions}
        />
      </div>
    </div>
  );
};

export default CVMain;
