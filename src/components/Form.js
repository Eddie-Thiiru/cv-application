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
        job: {
          text: "",
          id: uniqid(),
        },
        data: [],
      },
      workCount: [{ test1: "1" }],
      educationCount: [{ test1: "1" }],
      skillCount: [{ test1: "1" }],
    };

    this.removeWork = this.removeWork.bind(this);
  }

  addWork = () => {
    this.setState({
      workCount: this.state.workCount.concat([{ test2: "2" }]),
      work: {
        job: {},
      },
    });
  };

  addEducation = () => {
    this.setState({
      educationCount: this.state.educationCount.concat([{ test2: "2" }]),
    });
  };

  addSkill = () => {
    this.setState({
      skillCount: this.state.skillCount.concat([{ test2: "2" }]),
    });
  };

  removeWork = (e) => {
    this.setState({
      work: this.work.filter((item) => {
        return item.id !== e.target.id;
      }),
    });
  };

  render() {
    const { onSubmitForm } = this.props;

    const workList = [];

    for (let i = 0; i < this.state.workCount; i++) {
      workList.concat(<Work />);
    }

    return (
      <form onSubmit={onSubmitForm} className="form">
        <section>
          <h3>Personal Information</h3>
          <General />
        </section>
        <section>
          <h3>Work History</h3>
          <div className="workContainer">
            {this.state.workCount.map((item, index) => (
              <Work key={index} rmWorkBtnClicked={this.removeWork}></Work>
            ))}
          </div>
          <button type="button" className="workAddBtn" onClick={this.addWork}>
            ADD WORK
          </button>
        </section>
        <section>
          <h3>Education</h3>
          <div className="educationContainer">
            {this.state.educationCount.map((item, index) => (
              <Education key={index}></Education>
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
            {this.state.skillCount.map((item, index) => (
              <Skill key={index}></Skill>
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
