import React from "react";

export default function EducationSection(props) {
  const info = props.educationInfo;
  return (
    <div>
      <h4>Course: {info.course}</h4>
      <h4>Institution Name: {info.school}</h4>
      <h4>City: {info.city}</h4>
      <div>
        <h4>
          {" "}
          From {info.eduFrom} To {info.eduTo}
        </h4>
      </div>
      <br></br>
    </div>
  );
}
