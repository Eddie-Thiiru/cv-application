import React, { Component } from "react";

class EducationCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { school, degree, field, schoolStartDate, schoolEndDate } =
      this.props.education;

    return (
      <div className="educationCard">
        <div className="educationDates">
          <p>
            {schoolStartDate}-{schoolEndDate}
          </p>
        </div>
        <div className="educationDetails">
          <h3>
            {degree}: {field}
          </h3>
          <p>{school}</p>
        </div>
      </div>
    );
  }
}

export default EducationCard;
