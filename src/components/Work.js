import React, { Component } from "react";
import "../styles/Work.css";

// const Button = ({ action, onButtonClicked }) => {
//   if (action.new === false) {
//     return (
//       <button type="button" className="workAddBtn" onClick={onButtonClicked}>
//         Add Work
//       </button>
//     );
//   } else {
//     return (
//       <button type="button" className="workDelBtn" onClick={onButtonClicked}>
//         Delete
//       </button>
//     );
//   }
// };

class Work extends Component {
  constructor() {
    super();

    this.state = {
      new: false,
    };

    this.onClick = this.onClickBtn.bind(this);
  }

  onClickBtn = () => {
    console.log("clicked");
  };

  render() {
    const { rmWorkBtnClicked } = this.props;

    return (
      <div className="work">
        <div className="wrapper">
          <div>
            <label htmlFor="jobInput">Job Title</label>
            <input
              type="text"
              id="jobInput"
              placeholder="e.g. Junior Developer"
            ></input>
          </div>
          <div>
            <label htmlFor="employerInput">Employer</label>
            <input
              type="text"
              id="employerInput"
              placeholder="e.g. Alphabet Inc."
            ></input>
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="workStartInput">Start Date</label>
            <input type="date" id="workStartInput"></input>
          </div>
          <div>
            <label htmlFor="workEndInput">End Date</label>
            <input type="date" id="workEndInput"></input>
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="jobDescriptionInput"></label>
            <textarea
              id="jobDescriptionInput"
              placeholder="Type your achievements and responsibilities here."
            ></textarea>
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
