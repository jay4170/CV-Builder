import "./App.css";
import CVMain from "./CV-Main/CVMain";
import CVPreview from "./CV/CVPreview";
import blank from "./CV/components/Blank";
import Test from "./CV/components/Test";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

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
  const componentRef = useRef();

  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  const resetOptions = () => {
    setInfo(blank());
  };
  const exampleOptions = () => {
    setInfo(Test());
  };

  return (
    <div className="page">
      <CVMain
        options={info}
        resetOptions={resetOptions}
        exampleOptions={exampleOptions}
        handlePersonalChange={handlePersonalChange}
        handleExperienceChange={handleExperienceChange}
        handleEducationChange={handleEducationChange}
        handlePrint={handlePrint}
      />

      <div className="CV_mirror_main" ref={componentRef}>
        <CVPreview cvInfo={info} />
      </div>
    </div>
  );
};

export default App;
