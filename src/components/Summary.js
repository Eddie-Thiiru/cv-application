import React, { Component } from "react";
import "../styles/Summary.css";

class Summary extends Component {
  render() {
    const { summaryData, onInputChange } = this.props;

    return (
      <div className="summary">
        <div className="summaryWrapper">
          <label htmlFor="summaryInput" />
          <textarea
            onChange={onInputChange}
            defaultValue={summaryData.text}
            id="summaryInput"
            name="summary"
            placeholder="Write your summary here."
          />
        </div>
      </div>
    );
  }
}

export default Summary;
