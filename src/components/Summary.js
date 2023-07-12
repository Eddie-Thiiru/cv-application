import React, { Component } from "react";
import "../styles/Summary.css";

class Summary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { summary, onInputChange } = this.props;

    return (
      <div className="summary">
        <h3>Professional Summary</h3>
        <div>
          <label htmlFor="summaryInput" />
          <textarea
            onChange={onInputChange}
            defaultValue={summary.text}
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
