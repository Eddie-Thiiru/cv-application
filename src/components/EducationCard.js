import React, { Component } from "react";
import { format, parseISO } from "date-fns";

class EducationCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { school, degree, field, schoolStartDate, schoolEndDate } =
      this.props.education;

    const start = format(parseISO(schoolStartDate), "MMM yyyy");
    const end = format(parseISO(schoolEndDate), "MMM yyyy");

    return (
      <div className="educationCard">
        <div className="educationDates">
          <p>
            {start}-{end}
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
