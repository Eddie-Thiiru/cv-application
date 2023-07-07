import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <section className="sectionThree">
        <h3>Education</h3>
        <div className="container">
          <div>
            <label htmlFor="schoolNameInput">School Name</label>
            <input
              type="text"
              id="schoolNameInput"
              placeholder="e.g. University of Oxford"
            ></input>
          </div>
        </div>
        <div className="container">
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
        <div className="container">
          <div>
            <label htmlFor="schoolStartInput">Start Date</label>
            <input type="date" id="schoolStartInput"></input>
          </div>
          <div>
            <label htmlFor="schoolEndInput">End Date</label>
            <input type="date" id="schoolEndInput"></input>
          </div>
        </div>
        <button type="submit">Add</button>
      </section>
    );
  }
}

export default Education;
