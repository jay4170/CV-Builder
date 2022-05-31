import React from "react";
import "./PersonalSection.css";

export default function PersonalSection(props) {
  const info = props.personalInfo;
  return (
    <div>
      <div>
        <h3>
          Name: {info.title} {info.first} {info.last}
        </h3>
        <img className="img_200" alt="handsome face" src={info.photo}></img>
      </div>
      <h4>Phone: {info.phone}</h4>
      <h4>Address: {info.address}</h4>
      <h4>About Me: {info.about}</h4>
    </div>
  );
}
