import React from "react";
import "../styles/Work.css";
import { FaTrashAlt } from "react-icons/fa";

const Work = (props) => {
  const { workData, num, workId, rmWorkBtnClicked, onInputChange } = props;
  const {
    jobTitle,
    employer,
    workStartDate,
    workEndDate,
    workDescription,
    checkboxState,
  } = workData;
  const checkboxValue = checkboxState === true ? "checked" : "unchecked";
  const endDataValue = checkboxState === true ? "" : workEndDate;

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
            value={endDataValue}
            disabled={checkboxState}
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
      <div className="workWrapper">
        <div className="workCheckbox">
          <input
            onChange={onInputChange}
            defaultValue={checkboxValue}
            checked={checkboxState}
            type="checkbox"
            id="jobCheckbox"
            name="jobCheckbox"
            data-key={num}
          />
          <label htmlFor="jobCheckbox">I currently work here</label>
        </div>
        <button
          onClick={rmWorkBtnClicked}
          type="button"
          className="delJobBtn"
          id={workId}
        >
          <FaTrashAlt size="20px" pointerEvents="none" />
        </button>
      </div>
    </div>
  );
};

export default Work;
