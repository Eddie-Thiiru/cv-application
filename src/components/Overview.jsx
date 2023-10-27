import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import JobCard from "./JobCard";
import EducationCard from "./EducationCard";
import SkillCard from "./SkillCard";

import "../styles/Overview.css";

const Overview = (props) => {
  const componentRef = useRef();

  const {
    generalData,
    workArray,
    educationArray,
    skillsArray,
    summaryData,
    edit,
  } = props;
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

  const isWorkEmpty = (item) => {
    if (
      item.jobTitle === "" &&
      item.employer === "" &&
      item.workStartDate === "" &&
      item.workEndDate === "" &&
      item.workDescription === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isEducationEmpty = (item) => {
    if (
      item.school === "" &&
      item.degree === "" &&
      item.field === "" &&
      item.schoolStartDate === "" &&
      item.schoolEndDate === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="overviewContainer">
      <div className="overview" ref={componentRef}>
        <div className="cvHeading">
          <div className="person">
            <h1>
              {firstName} {surname}
            </h1>
            <h2>{profession}</h2>
          </div>
          <div className="contacts">
            <p>
              <b>Address</b> {address !== "" && `P.O. Box ${address}-`}
              {postcode !== "" && `${postcode}, `} {city} {country}
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
          {workArray.map((item, index) => {
            const workEmpty = isWorkEmpty(item);
            if (workEmpty === false) {
              return <JobCard key={index} job={item} />;
            } else {
              return null;
            }
          })}
        </div>
        <div className="cvEducationHistory">
          <h2>Education</h2>
          {educationArray.map((item, index) => {
            const educationEmpty = isEducationEmpty(item);

            if (educationEmpty === false) {
              return <EducationCard key={index} education={item} />;
            } else {
              return null;
            }
          })}
        </div>
        <div className="cvSkills">
          <h2>Skills</h2>
          {skillsArray.map((item, index) => {
            if (item.skill !== "") {
              return <SkillCard key={index} skill={item} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="overviewBtnContainer">
        <button type="button" className="editBtn" onClick={edit}>
          <MdOutlineModeEditOutline size="20px" />
          EDIT
        </button>
        <button type="button" className="downloadBtn" onClick={handlePrint}>
          <HiDownload size="20px" />
          DOWNLOAD
        </button>
      </div>
    </div>
  );
};

export default Overview;
