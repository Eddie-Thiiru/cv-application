import React, { Component } from "react";
import "../styles/Work.css";

class Work extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { work, workId, rmWorkBtnClicked, onInputChange } = this.props;
    const { jobTitle, employer, workStartDate, workEndDate, workDescription } =
      work;

    return (
      <div className="work">
        <div className="wrapper">
          <div>
            <label htmlFor="jobInput">Job Title</label>
            <input
              onChange={onInputChange}
              defaultValue={jobTitle.text}
              type="text"
              id="jobInput"
              name="jobTitle"
              placeholder="e.g. Junior Developer"
            />
          </div>
          <div>
            <label htmlFor="employerInput">Employer</label>
            <input
              onChange={onInputChange}
              defaultValue={employer.text}
              type="text"
              id="employerInput"
              name="employer"
              placeholder="e.g. Alphabet Inc."
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="workStartInput">Start Date</label>
            <input
              onChange={onInputChange}
              defaultValue={workStartDate.text}
              type="date"
              id="workStartInput"
              name="workStartDate"
            />
          </div>
          <div>
            <label htmlFor="workEndInput">End Date</label>
            <input
              onChange={onInputChange}
              defaultValue={workEndDate.text}
              type="date"
              id="workEndInput"
              name="workEndDate"
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="descriptionInput" />
            <textarea
              onChange={onInputChange}
              defaultValue={workDescription.text}
              id="descriptionInput"
              name="workDescription"
              placeholder="Type your achievements and responsibilities here."
            />
          </div>
        </div>
        <button
          onClick={rmWorkBtnClicked}
          type="button"
          className="delWork"
          id={workId}
        >
          DELETE
        </button>
      </div>
    );
  }
}

export default Work;
