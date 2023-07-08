import React, { Component } from "react";
import "../styles/Summary.css";

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: {
        text: "",
      },
    };
  }

  handleSummaryChange = (e) => {
    this.setState({
      summary: {
        text: e.target.value,
      },
    });
  };

  render() {
    const { summary } = this.state;

    return (
      <div className="summary">
        <h3>Professional Summary</h3>
        <div>
          <label htmlFor="summaryInput" />
          <textarea
            onChange={this.handleSummaryChange}
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
