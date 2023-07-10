import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import Work from "./Work";
import Skill from "./Skill";
import Summary from "./Summary";
import "../styles/Form.css";
import uniqid from "uniqid";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      work: {
        items: [{ item: "work", id: uniqid() }],
      },
      education: {
        items: [{ item: "education", id: uniqid() }],
      },
      skill: {
        items: [{ item: "skill", id: uniqid() }],
      },
    };

    this.removeWork = this.removeWork.bind(this);

    this.removeEducation = this.removeEducation.bind(this);

    this.removeSkill = this.removeSkill.bind(this);
  }

  addWork = () => {
    let newItem = { item: "work", id: uniqid() };

    this.setState({
      work: {
        items: this.state.work.items.concat(newItem),
      },
    });
  };

  addEducation = () => {
    let newItem = { item: "education", id: uniqid() };

    this.setState({
      education: {
        items: this.state.education.items.concat(newItem),
      },
    });
  };

  addSkill = () => {
    let newItem = { item: "education", id: uniqid() };

    this.setState({
      skill: {
        items: this.state.skill.items.concat(newItem),
      },
    });
  };

  removeWork = (e) => {
    this.setState({
      work: {
        items: this.state.work.items.filter((item) => {
          return item.id !== e.target.id;
        }),
      },
    });
  };

  removeEducation = (e) => {
    this.setState({
      education: {
        items: this.state.education.items.filter((item) => {
          return item.id !== e.target.id;
        }),
      },
    });
  };

  removeSkill = (e) => {
    this.setState({
      skill: {
        items: this.state.skill.items.filter((item) => {
          return item.id !== e.target.id;
        }),
      },
    });
  };

  render() {
    const { onSubmitForm } = this.props;
    const { work, education, skill } = this.state;

    return (
      <form onSubmit={onSubmitForm} className="form">
        <section>
          <h3>Personal Information</h3>
          <General />
        </section>
        <section>
          <h3>Work History</h3>
          <div className="workContainer">
            {work.items.map((item) => (
              <Work
                key={item.id}
                workId={item.id}
                rmWorkBtnClicked={this.removeWork}
              />
            ))}
          </div>
          <button type="button" className="workAddBtn" onClick={this.addWork}>
            ADD WORK
          </button>
        </section>
        <section>
          <h3>Education</h3>
          <div className="educationContainer">
            {education.items.map((item) => (
              <Education
                key={item.id}
                educationId={item.id}
                rmEducationBtnClicked={this.removeEducation}
              />
            ))}
          </div>
          <button
            type="button"
            className="educationAddBtn"
            onClick={this.addEducation}
          >
            ADD EDUCATION
          </button>
        </section>
        <section>
          <h3>Skills</h3>
          <div className="skillContainer">
            {skill.items.map((item) => (
              <Skill
                key={item.id}
                skillId={item.id}
                rmSkillBtnClicked={this.removeSkill}
              />
            ))}
          </div>
          <button type="button" className="skillAddBtn" onClick={this.addSkill}>
            ADD SKILL
          </button>
        </section>
        <section>
          <Summary />
        </section>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
