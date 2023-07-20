import React from "react";
import { format, parseISO } from "date-fns";

const EducationCard = (props) => {
  const {
    school,
    degree,
    field,
    schoolStartDate,
    schoolEndDate,
    checkboxState,
  } = props.education;

  let start;
  let end;

  if (
    schoolStartDate !== "" &&
    schoolEndDate !== "" &&
    checkboxState === false
  ) {
    start = format(parseISO(schoolStartDate), "MMM yyyy");
    end = format(parseISO(schoolEndDate), "MMM yyyy");
  } else if (schoolStartDate !== "" && checkboxState === true) {
    start = format(parseISO(schoolStartDate), "MMM yyyy");
    end = "Current";
  } else if (
    schoolStartDate !== "" &&
    schoolEndDate === "" &&
    checkboxState === false
  ) {
    start = format(parseISO(schoolStartDate), "MMM yyyy");
    end = "";
  } else if (schoolStartDate === "" && checkboxState === true) {
    start = "";
    end = "Current";
  } else if (schoolStartDate === "" && schoolEndDate !== "") {
    start = "";
    end = format(parseISO(schoolEndDate), "MMM yyyy");
  } else {
    start = "";
    end = "";
  }

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
};

export default EducationCard;
