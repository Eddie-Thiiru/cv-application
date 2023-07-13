import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import Work from "./Work";
import Skill from "./Skill";
import Summary from "./Summary";
import "../styles/Form.css";
import { LuPlus } from "react-icons/lu";

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
          <h2>Personal Information</h2>
          <General
            generalData={generalData}
            onInputChange={inputGeneralChange}
          />
        </section>
        <section>
          <h2>Work History</h2>
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
            <LuPlus color="white" size="20px" pointerEvents="none" />
            ADD WORK
          </button>
        </section>
        <section>
          <h2>Education</h2>
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
            <LuPlus color="white" size="20px" pointerEvents="none" />
            ADD EDUCATION
          </button>
        </section>
        <section>
          <h2>Skills</h2>
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
            <LuPlus color="white" size="20px" pointerEvents="none" />
            ADD SKILL
          </button>
        </section>
        <section>
          <h2>Professional Summary</h2>
          <Summary
            summaryData={summaryData}
            onInputChange={inputSummaryChange}
          />
        </section>
        <button type="submit" className="submitBtn">
          NEXT
        </button>
      </form>
    );
  }
}

export default Form;
