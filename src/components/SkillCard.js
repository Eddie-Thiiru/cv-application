import React, { Component } from "react";

class SkillCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { skill, level } = this.props.skill;

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
  }
}

export default SkillCard;
