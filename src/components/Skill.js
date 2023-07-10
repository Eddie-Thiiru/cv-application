import React, { Component } from "react";
import "../styles/Skill.css";

class Skill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: { text: "" },
      level: { text: "" },
    };
  }

  handleSkillChange = (e) => {
    this.setState({
      skill: {
        text: e.target.value,
      },
    });
  };

  handleLevelChange = (e) => {
    this.setState({
      level: {
        text: e.target.value,
      },
    });
  };

  render() {
    const { skill } = this.state;
    const { skillId, rmSkillBtnClicked } = this.props;

    return (
      <div className="skill">
        <div className="wrapper">
          <div>
            <label htmlFor="skillInput" />
            <input
              onChange={this.handleSkillChange}
              defaultValue={skill.text}
              type="text"
              id="skillInput"
              name="skill"
            />
          </div>
        </div>
        <div className="wrapper">
          <label htmlFor="level">Skill Level</label>
          <select id="level" name="level" onChange={this.handleLevelChange}>
            <option defaultValue="novice">Novice</option>
            <option defaultValue="intermediate">Intermediate</option>
            <option defaultValue="advanced">Advanced</option>
            <option defaultValue="expert">Expert</option>
          </select>
        </div>
        <button
          onClick={rmSkillBtnClicked}
          type="button"
          className="delSkill"
          id={skillId}
        >
          DELETE
        </button>
      </div>
    );
  }
}

export default Skill;
