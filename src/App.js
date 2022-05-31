import "./App.css";
import CVMain from "./CV-Main/CVMain";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CVPreview from "./CV/CVPreview";
import blank from "./CV/components/Blank";
import Test from "./CV/components/Test";
import { useState } from "react";

const App = () => {
  const [info, setInfo] = useState(blank());
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;

    setInfo((prevState) => ({
      ...prevState,
      experienceInfo: [
        {
          ...prevState.experienceInfo[0],
          [name]: value,
        },
      ],
    }));
  };

  //hardcoded array 0 in until we figure out a way to access dataset in target
  const handleEducationChange = (e) => {
    const { name, value } = e.target;

    setInfo((prevState) => ({
      ...prevState,
      educationInfo: [
        {
          ...prevState.educationInfo[0],
          [name]: value,
        },
      ],
    }));
  };

  const resetOptions = () => {
    setInfo(blank());
  };
  const exampleOptions = () => {
    setInfo(Test());
  };

  return (
    <div className="page">
      <Header />

      <div className="">
        <CVMain
          options={info}
          resetOptions={resetOptions}
          exampleOptions={exampleOptions}
          handlePersonalChange={handlePersonalChange}
          handleExperienceChange={handleExperienceChange}
          handleEducationChange={handleEducationChange}
        />
      </div>
      <CVPreview cvInfo={info} />
      <Footer />
    </div>
  );
};

export default App;
