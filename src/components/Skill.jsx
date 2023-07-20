import React from "react";
import "../styles/Skill.css";
import { FaTrashAlt } from "react-icons/fa";

const Skill = (props) => {
  const { skillData, num, skillId, rmSkillBtnClicked, onInputChange } = props;
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
        <FaTrashAlt size="20px" pointerEvents="none" />
      </button>
    </div>
  );
};

export default Skill;
