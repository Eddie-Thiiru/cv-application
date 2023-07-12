import React, { Component } from "react";
import "../styles/Summary.css";

class Summary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { summaryData, onInputChange } = this.props;

    return (
      <div className="summary">
        <h3>Professional Summary</h3>
        <div>
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
