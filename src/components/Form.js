import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import Work from "./Work";
import Skill from "./Skill";
import Summary from "./Summary";
import "../styles/Form.css";

class Form extends Component {
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
      inputGeneralChange,
      inputWorkChange,
      inputEducationChange,
      inputSkillChange,
      inputSummaryChange,
      addWork,
      addEducation,
      addSkill,
      removeWork,
      removeEducation,
      removeSkill,
      onSubmitCV,
    } = this.props;

    return (
      <form onSubmit={onSubmitCV} className="form">
        <section>
          <h3>Personal Information</h3>
          <General
            generalData={generalData}
            onInputChange={inputGeneralChange}
          />
        </section>
        <section>
          <h3>Work History</h3>
          <div className="workContainer">
            {workArray.map((item, index) => (
              <Work
                workData={item}
                num={index}
                key={item.id}
                workId={item.id}
                rmWorkBtnClicked={removeWork}
                onInputChange={inputWorkChange}
              />
            ))}
          </div>
          <button type="button" className="workAddBtn" onClick={addWork}>
            ADD WORK
          </button>
        </section>
        <section>
          <h3>Education</h3>
          <div className="educationContainer">
            {educationArray.map((item, index) => (
              <Education
                educationData={item}
                num={index}
                key={item.id}
                educationId={item.id}
                rmEducationBtnClicked={removeEducation}
                onInputChange={inputEducationChange}
              />
            ))}
          </div>
          <button
            type="button"
            className="educationAddBtn"
            onClick={addEducation}
          >
            ADD EDUCATION
          </button>
        </section>
        <section>
          <h3>Skills</h3>
          <div className="skillContainer">
            {skillsArray.map((item, index) => (
              <Skill
                skillData={item}
                num={index}
                key={item.id}
                skillId={item.id}
                rmSkillBtnClicked={removeSkill}
                onInputChange={inputSkillChange}
              />
            ))}
          </div>
          <button type="button" className="skillAddBtn" onClick={addSkill}>
            ADD SKILL
          </button>
        </section>
        <section>
          <Summary
            summaryData={summaryData}
            onInputChange={inputSummaryChange}
          />
        </section>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
