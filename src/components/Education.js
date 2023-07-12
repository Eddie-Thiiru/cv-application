import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { education, educationId, rmEducationBtnClicked, onInputChange } =
      this.props;
    const { school, degree, field, schoolStartDate, schoolEndDate } = education;

    return (
      <div className="education">
        <div className="wrapper">
          <div>
            <label htmlFor="schoolNameInput">School Name</label>
            <input
              onChange={onInputChange}
              defaultValue={school.text}
              type="text"
              id="schoolNameInput"
              name="school"
              placeholder="e.g. University of Oxford"
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="degreeInput">Degree</label>
            <input
              onChange={onInputChange}
              defaultValue={degree.text}
              type="text"
              id="degreeInput"
              name="degree"
              placeholder="e.g. Bachelor of Computer Science"
            />
          </div>
          <div>
            <label htmlFor="studyFieldInput">Field of Study</label>
            <input
              onChange={onInputChange}
              defaultValue={field.text}
              type="text"
              id="studyFieldInput"
              name="field"
              placeholder="e.g. Computer Science"
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="schoolStartInput">Start Date</label>
            <input
              onChange={onInputChange}
              defaultValue={schoolStartDate.text}
              type="date"
              id="schoolStartInput"
              name="schoolStartDate"
            />
          </div>
          <div>
            <label htmlFor="schoolEndInput">End Date</label>
            <input
              onChange={onInputChange}
              defaultValue={schoolEndDate.text}
              type="date"
              id="schoolEndInput"
              name="schoolEndDate"
            />
          </div>
        </div>
        <button
          onClick={rmEducationBtnClicked}
          type="button"
          className="delEducation"
          id={educationId}
        >
          DELETE
        </button>
      </div>
    );
  }
}

export default Education;
