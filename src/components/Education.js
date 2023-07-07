import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <form className="educationForm">
          <h3>Education</h3>
          <section>
            <div>
              <label htmlFor="schoolNameInput">School Name</label>
              <input
                type="text"
                id="schoolNameInput"
                placeholder="e.g. University of Oxford"
              ></input>
            </div>
          </section>
          <section>
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
          </section>
          <section>
            <div>
              <label htmlFor="schoolStartInput">Start Date</label>
              <input type="date" id="schoolStartInput"></input>
            </div>
            <div>
              <label htmlFor="schoolEndInput">End Date</label>
              <input type="date" id="schoolEndInput"></input>
            </div>
          </section>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default Education;
