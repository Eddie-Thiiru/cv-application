import React, { Component } from "react";
import { format, parseISO } from "date-fns";

class JobCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { jobTitle, employer, workStartDate, workEndDate, workDescription } =
      this.props.job;

    const start = format(parseISO(workStartDate), "MMM yyyy");
    const end = format(parseISO(workEndDate), "MMM yyyy");

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
