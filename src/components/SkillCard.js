import React from "react";

const SkillCard = (props) => {
  const { skill, level } = props.skill;

  return (
    <div className="skillCard">
      <div className="skillName">
        <p>{skill}</p>
      </div>
      <div className="skillLevel">
        <p>{level}</p>
      </div>
    </div>
  );
};

export default SkillCard;
