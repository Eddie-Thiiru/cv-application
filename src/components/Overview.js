import React, { Component } from "react";
import JobCard from "./JobCard";
import EducationCard from "./EducationCard";
import SkillCard from "./SkillCard";
import "../styles/Overview.css";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      generalData,
      workArray,
      educationArray,
      skillsArray,
      summaryData,
      edit,
    } = this.props;
    const {
      firstName,
      surname,
      profession,
      address,
      city,
      country,
      postcode,
      phone,
      email,
    } = generalData;

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
              <b>Address</b> P.O. Box {address}-{postcode}, {city} {country}
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
          <p>{summaryData.text}</p>
        </div>
        <div className="cvWorkHistory">
          <h2>Work History</h2>
          {workArray.map((item, index) => (
            <JobCard key={index} job={item} />
          ))}
        </div>
        <div className="cvEducationHistory">
          <h2>Education</h2>
          {educationArray.map((item, index) => (
            <EducationCard key={index} education={item} />
          ))}
        </div>
        <div className="cvSkills">
          <h2>Skills</h2>
          {skillsArray.map((item, index) => (
            <SkillCard key={index} skill={item} />
          ))}
        </div>
        <button type="button" className="editBtn" onClick={edit}>
          EDIT
        </button>
      </div>
    );
  }
}

export default Overview;
