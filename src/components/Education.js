import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: { text: "" },
      degree: { text: "" },
      field: { text: "" },
      start: { text: "" },
      end: { text: "" },
    };
  }

  handleSchoolChange = (e) => {
    this.setState({
      school: { text: e.target.value },
    });
  };

  handleDegreeChange = (e) => {
    this.setState({
      degree: { text: e.target.value },
    });
  };

  handleFieldChange = (e) => {
    this.setState({
      field: { text: e.target.value },
    });
  };

  handleStartChange = (e) => {
    this.setState({
      start: { text: e.target.value },
    });
  };

  handleEndChange = (e) => {
    this.setState({
      end: { text: e.target.value },
    });
  };

  render() {
    const { school, degree, field, start, end } = this.state;
    const { educationId, rmEducationBtnClicked } = this.props;

    return (
      <div className="education">
        <div className="wrapper">
          <div>
            <label htmlFor="schoolNameInput">School Name</label>
            <input
              onChange={this.handleSchoolChange}
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
              onChange={this.handleDegreeChange}
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
              onChange={this.handleFieldChange}
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
              onChange={this.handleStartChange}
              defaultValue={start.text}
              type="date"
              id="schoolStartInput"
              name="start"
            />
          </div>
          <div>
            <label htmlFor="schoolEndInput">End Date</label>
            <input
              onChange={this.handleEndChange}
              defaultValue={end.text}
              type="date"
              id="schoolEndInput"
              name="end"
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
