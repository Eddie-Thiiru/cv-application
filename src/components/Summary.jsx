import React from "react";
import "../styles/Summary.css";

const Summary = (props) => {
  const { summaryData, onInputChange } = props;

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
};

export default Summary;
