import React, { Component } from "react";
import "../styles/Skill.css";

class Skill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { skills, skillId, rmSkillBtnClicked, onInputChange } = this.props;
    const { skill, level } = skills;

    return (
      <div className="skill">
        <div className="wrapper">
          <div>
            <label htmlFor="skillInput" />
            <input
              onChange={onInputChange}
              defaultValue={skill.text}
              type="text"
              id="skillInput"
              name="skill"
            />
          </div>
        </div>
        <div className="wrapper">
          <label htmlFor="level">Skill Level</label>
          <select
            id="level"
            name="level"
            defaultValue={level.text}
            onChange={onInputChange}
          >
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
