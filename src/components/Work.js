import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
      <div className="work">
        <form className="workForm">
          <h3>Work History</h3>
          <section>
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
          </section>
          <section>
            <div>
              <label htmlFor="workStartInput">Start Date</label>
              <input type="date" id="workStartInput"></input>
            </div>
            <div>
              <label htmlFor="workEndInput">End Date</label>
              <input type="date" id="workEndInput"></input>
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="jobDescriptionInput"></label>
              <textarea
                id="jobDescriptionInput"
                placeholder="Type your achievements and responsibilities here."
              ></textarea>
            </div>
          </section>
          <button type="submit">ADD POSITION</button>
        </form>
      </div>
    );
  }
}

export default Work;
