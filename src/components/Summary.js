import React, { Component } from "react";

class Summary extends Component {
  render() {
    return (
      <div className="summary">
        <form className="summaryForm">
          <h3>Professional Summary</h3>
          <section>
            <label htmlFor="summaryInput"></label>
            <textarea
              id="summaryInput"
              placeholder="Write your summary here."
            ></textarea>
          </section>
        </form>
      </div>
    );
  }
}

export default Summary;
