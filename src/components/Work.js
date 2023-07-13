import React, { Component } from "react";
import "../styles/Work.css";

class Work extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { workData, num, workId, rmWorkBtnClicked, onInputChange } =
      this.props;
    const { jobTitle, employer, workStartDate, workEndDate, workDescription } =
      workData;

    return (
      <div className="work">
        <div className="workWrapper">
          <div>
            <label htmlFor="jobInput">Job Title</label>
            <input
              onChange={onInputChange}
              defaultValue={jobTitle}
              type="text"
              id="jobInput"
              name="jobTitle"
              data-key={num}
              placeholder="e.g. Junior Developer"
            />
          </div>
          <div>
            <label htmlFor="employerInput">Employer</label>
            <input
              onChange={onInputChange}
              defaultValue={employer}
              type="text"
              id="employerInput"
              name="employer"
              data-key={num}
              placeholder="e.g. Alphabet Inc."
            />
          </div>
        </div>
        <div className="workWrapper">
          <div>
            <label htmlFor="workStartInput">Start Date</label>
            <input
              onChange={onInputChange}
              defaultValue={workStartDate}
              type="date"
              id="workStartInput"
              name="workStartDate"
              data-key={num}
            />
          </div>
          <div>
            <label htmlFor="workEndInput">End Date</label>
            <input
              onChange={onInputChange}
              defaultValue={workEndDate}
              type="date"
              id="workEndInput"
              name="workEndDate"
              data-key={num}
            />
          </div>
        </div>
        <div className="workWrapper">
          <div>
            <label htmlFor="descriptionInput" />
            <textarea
              onChange={onInputChange}
              defaultValue={workDescription}
              id="descriptionInput"
              name="workDescription"
              data-key={num}
              placeholder="Type your achievements and responsibilities here."
            />
          </div>
        </div>
        <button
          onClick={rmWorkBtnClicked}
          type="button"
          className="delJobBtn"
          id={workId}
        >
          DELETE
        </button>
      </div>
    );
  }
}

export default Work;
