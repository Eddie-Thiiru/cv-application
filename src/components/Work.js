import React, { Component } from "react";
import "../styles/Work.css";

class Work extends Component {
  constructor() {
    super();

    this.state = {
      job: { text: "" },
      employer: { text: "" },
      start: { text: "" },
      end: { text: "" },
      description: { text: "" },
    };

    this.onClick = this.onClickBtn.bind(this);
  }

  handleJobChange = (e) => {
    this.setState({
      job: {
        text: e.target.value,
      },
    });
  };

  handleEmployerChange = (e) => {
    this.setState({
      employer: {
        text: e.target.value,
      },
    });
  };

  handleStartChange = (e) => {
    this.setState({
      start: {
        text: e.target.value,
      },
    });
  };

  handleEndChange = (e) => {
    this.setState({
      end: {
        text: e.target.value,
      },
    });
  };

  handleDescriptionChange = (e) => {
    this.setState({
      description: {
        text: e.target.value,
      },
    });
  };

  onClickBtn = () => {
    console.log("clicked");
  };

  render() {
    const { job, employer, start, end, description } = this.state;
    const { rmWorkBtnClicked } = this.props;

    return (
      <div className="work">
        <div className="wrapper">
          <div>
            <label htmlFor="jobInput">Job Title</label>
            <input
              onChange={this.handleJobChange}
              defaultValue={job.text}
              type="text"
              id="jobInput"
              name="jobTitle"
              placeholder="e.g. Junior Developer"
            />
          </div>
          <div>
            <label htmlFor="employerInput">Employer</label>
            <input
              onChange={this.handleEmployerChange}
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
              onChange={this.handleStartChange}
              defaultValue={start.text}
              type="date"
              id="workStartInput"
              name="startDate"
            />
          </div>
          <div>
            <label htmlFor="workEndInput">End Date</label>
            <input
              onChange={this.handleEndChange}
              defaultValue={end.text}
              type="date"
              id="workEndInput"
              name="endDate"
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="descriptionInput" />
            <textarea
              onChange={this.handleDescriptionChange}
              defaultValue={description.text}
              id="descriptionInput"
              name="description"
              placeholder="Type your achievements and responsibilities here."
            />
          </div>
        </div>
        <button type="button" className="delWork" onClick={rmWorkBtnClicked}>
          DELETE
        </button>
      </div>
    );
  }
}

export default Work;
