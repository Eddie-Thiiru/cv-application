import React, { Component } from "react";
import "../styles/Summary.css";

class Summary extends Component {
  render() {
    return (
      <div className="summary">
        <h3>Professional Summary</h3>
        <div>
          <label htmlFor="summaryInput"></label>
          <textarea
            id="summaryInput"
            placeholder="Write your summary here."
          ></textarea>
        </div>
      </div>
    );
  }
}

export default Summary;
