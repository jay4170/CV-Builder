import "./App.css";
import { Component } from "react";
import CVMain from "./CV-Main/CVMain";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CVPreview from "./CV/CVPreview";
import blank from "./CV/components/Blank";
import Test from "./CV/components/Test";

class App extends Component {
  constructor() {
    super();
    this.state = blank();
  }

  handlePersonalChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  handleExperienceChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      experienceInfo: {
        ...prevState.experienceInfo,
        [name]: value,
      },
    }));
  };
  handleEducationChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      educationInfo: {
        ...prevState.educationInfo,
        [name]: value,
      },
    }));
  };

  resetOptions = () => {
    this.setState(blank());
  };
  exampleOptions = () => {
    this.setState(Test());
  };

  render() {
    return (
      <div className="page">
        <Header />

        <div className="">
          <CVMain
            options={this.state}
            resetOptions={this.resetOptions}
            exampleOptions={this.exampleOptions}
            handlePersonalChange={this.handlePersonalChange}
            handleExperienceChange={this.handleExperienceChange}
            handleEducationChange={this.handleEducationChange}
          />
        </div>
        <CVPreview cvInfo={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
