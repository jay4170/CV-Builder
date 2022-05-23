import React, { Component } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";
import "./CVMain.css";

class CVMain extends Component {
  constructor(props) {
    super(props);

    this.slide = this.slide.bind(this);
  }

  slide() {
    this.classList.toggle("hide");
  }
  render() {
    return (
      <div className="CV_main">
        <PersonalInfo />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default CVMain;
