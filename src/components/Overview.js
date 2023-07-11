import React, { Component } from "react";
import JobCard from "./JobCard";
import EducationCard from "./EducationCard";
import SkillCard from "./SkillCard";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { formData, edit } = this.props;
    const data = Object.assign({}, ...formData);
    const {
      firstName,
      surname,
      profession,
      postalAddress,
      city,
      country,
      postcode,
      phone,
      email,
      jobTitle,
      employer,
      workStartDate,
      workEndDate,
      workDescription,
      school,
      degree,
      field,
      schoolStartDate,
      schoolEndDate,
      skill,
      level,
      summary,
    } = data;

    return (
      <div className="overview">
        <div className="cvHeading">
          <div className="person">
            <h1>
              {firstName} {surname}
            </h1>
            <h3>{profession}</h3>
          </div>
          <div className="contacts">
            <p>
              <b>Address</b> P.O. Box {postalAddress}-{postcode}, {city}{" "}
              {country}
            </p>
            <p>
              <b>Phone</b> {phone}
            </p>
            <p>
              <b>E-mail</b> {email}
            </p>
          </div>
        </div>
        <div className="cvSummary">
          <p>{summary}</p>
        </div>
        <div className="cvWorkHistory">
          <h2>Work History</h2>
          <JobCard
            job={{
              jobTitle,
              employer,
              workStartDate,
              workEndDate,
              workDescription,
            }}
          />
        </div>
        <div className="cvEducationHistory">
          <h2>Education</h2>
          <EducationCard
            education={{
              school,
              degree,
              field,
              schoolStartDate,
              schoolEndDate,
            }}
          />
        </div>
        <div className="cvSkills">
          <h2>Skills</h2>
          <SkillCard skill={{ skill, level }} />
        </div>
        <button className="editBtn" onClick={edit}>
          Edit
        </button>
      </div>
    );
  }
}

export default Overview;
