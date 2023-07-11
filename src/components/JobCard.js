import React, { Component } from "react";

class JobCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { jobTitle, employer, workStartDate, workEndDate, workDescription } =
      this.props.job;

    return (
      <div className="jobCard">
        <div className="jobDates">
          <p>
            {workStartDate}-{workEndDate}
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
