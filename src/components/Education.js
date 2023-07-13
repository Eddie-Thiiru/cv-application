import React, { Component } from "react";
import "../styles/Education.css";
import { FaTrashAlt } from "react-icons/fa";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      educationData,
      num,
      educationId,
      rmEducationBtnClicked,
      onInputChange,
    } = this.props;
    const { school, degree, field, schoolStartDate, schoolEndDate } =
      educationData;

    return (
      <div className="education">
        <div className="educationWrapper">
          <div>
            <label htmlFor="schoolNameInput">School Name</label>
            <input
              onChange={onInputChange}
              defaultValue={school}
              type="text"
              id="schoolNameInput"
              name="school"
              data-key={num}
              placeholder="e.g. University of Oxford"
            />
          </div>
        </div>
        <div className="educationWrapper">
          <div>
            <label htmlFor="degreeInput">Degree</label>
            <input
              onChange={onInputChange}
              defaultValue={degree}
              type="text"
              id="degreeInput"
              name="degree"
              data-key={num}
              placeholder="e.g. Bachelor of Computer Science"
            />
          </div>
          <div>
            <label htmlFor="studyFieldInput">Field of Study</label>
            <input
              onChange={onInputChange}
              defaultValue={field}
              type="text"
              id="studyFieldInput"
              name="field"
              data-key={num}
              placeholder="e.g. Computer Science"
            />
          </div>
        </div>
        <div className="educationWrapper">
          <div>
            <label htmlFor="schoolStartInput">Start Date</label>
            <input
              onChange={onInputChange}
              defaultValue={schoolStartDate}
              type="date"
              id="schoolStartInput"
              name="schoolStartDate"
              data-key={num}
            />
          </div>
          <div>
            <label htmlFor="schoolEndInput">End Date</label>
            <input
              onChange={onInputChange}
              defaultValue={schoolEndDate}
              type="date"
              id="schoolEndInput"
              name="schoolEndDate"
              data-key={num}
            />
          </div>
        </div>
        <button
          onClick={rmEducationBtnClicked}
          type="button"
          className="delEducationBtn"
          id={educationId}
        >
          <FaTrashAlt size="20px" pointerEvents="none" />
        </button>
      </div>
    );
  }
}

export default Education;
