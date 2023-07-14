import React, { Component } from "react";
import { format, parseISO } from "date-fns";

class JobCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      jobTitle,
      employer,
      workStartDate,
      workEndDate,
      workDescription,
      checkboxState,
    } = this.props.job;

    let start;
    let end;

    if (workStartDate !== "" && workEndDate !== "") {
      start = format(parseISO(workStartDate), "MMM yyyy");
      end = format(parseISO(workEndDate), "MMM yyyy");
    } else if (workStartDate !== "" && checkboxState === true) {
      start = format(parseISO(workStartDate), "MMM yyyy");
      end = "Current";
    } else if (
      workStartDate !== "" &&
      workEndDate === "" &&
      checkboxState === false
    ) {
      start = format(parseISO(workStartDate), "MMM yyyy");
      end = "";
    } else if (workStartDate === "" && checkboxState === true) {
      start = "";
      end = "Current";
    } else if (workStartDate === "" && workEndDate !== "") {
      start = "";
      end = format(parseISO(workEndDate), "MMM yyyy");
    } else {
      start = "";
      end = "";
    }

    return (
      <div className="jobCard">
        <div className="jobDates">
          <p>
            {start}-{end}
          </p>
        </div>
        <div className="jobDetails">
          <h3>{jobTitle}</h3>
          <p>{employer}</p>
          <p>{workDescription}</p>
        </div>
      </div>
    );
  }
}

export default JobCard;
