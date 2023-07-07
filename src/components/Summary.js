import React, { Component } from "react";

class Summary extends Component {
  render() {
    return (
      <section className="sectionFive">
        <h3>Professional Summary</h3>
        <div className="container">
          <label htmlFor="summaryInput"></label>
          <textarea
            id="summaryInput"
            placeholder="Write your summary here."
          ></textarea>
        </div>
      </section>
    );
  }
}

export default Summary;
