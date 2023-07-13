import React, { Component } from "react";
import "../styles/Skill.css";

class Skill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { skillData, num, skillId, rmSkillBtnClicked, onInputChange } =
      this.props;
    const { skill, level } = skillData;

    return (
      <div className="skill">
        <div className="skillWrapper">
          <div>
            <label htmlFor="skillInput" />
            <input
              onChange={onInputChange}
              defaultValue={skill}
              type="text"
              id="skillInput"
              name="skill"
              data-key={num}
            />
          </div>
        </div>
        <div className="skillWrapper">
          <label htmlFor="level">Level</label>
          <select
            onChange={onInputChange}
            defaultValue={level}
            id="level"
            name="level"
            data-key={num}
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
          className="delSkillBtn"
          id={skillId}
        >
          DELETE
        </button>
      </div>
    );
  }
}

export default Skill;
