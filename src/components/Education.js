import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <div className="wrapper">
          <div>
            <label htmlFor="schoolNameInput">School Name</label>
            <input
              type="text"
              id="schoolNameInput"
              placeholder="e.g. University of Oxford"
            ></input>
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="degreeInput">Degree</label>
            <input
              type="text"
              id="degreeInput"
              placeholder="e.g. Bachelor of Computer Science"
            ></input>
          </div>
          <div>
            <label htmlFor="studyFieldInput">Field of Study</label>
            <input
              type="text"
              id="studyFieldInput"
              placeholder="e.g. Computer Science"
            ></input>
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="schoolStartInput">Start Date</label>
            <input type="date" id="schoolStartInput"></input>
          </div>
          <div>
            <label htmlFor="schoolEndInput">End Date</label>
            <input type="date" id="schoolEndInput"></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
