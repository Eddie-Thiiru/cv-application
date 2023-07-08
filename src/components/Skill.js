import React, { Component } from "react";
import "../styles/Skill.css";

class Skill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: {
        text: "",
      },
    };
  }

  handleSkillChange = (e) => {
    this.setState({
      skill: {
        text: e.target.value,
      },
    });
  };

  render() {
    const { skill } = this.state;

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
          <fieldset>
            <div>
              <label htmlFor="oneStar" />
              <input
                type="radio"
                id="starOne"
                defaultValue="novice"
                name="star"
              />
            </div>
            <div>
              <label htmlFor="twoStar" />
              <input
                type="radio"
                id="starTwo"
                defaultValue="intermediate"
                name="star"
              />
            </div>
            <div>
              <label htmlFor="threeStar" />
              <input
                type="radio"
                id="starThree"
                defaultValue="advanced"
                name="star"
              />
            </div>
            <div>
              <label htmlFor="fourStar" />
              <input
                type="radio"
                id="starFour"
                defaultValue="superior"
                name="star"
              />
            </div>
            <div>
              <label htmlFor="fiveStar" />
              <input
                type="radio"
                id="starFive"
                defaultValue="expert"
                name="star"
              />
            </div>
          </fieldset>
        </div>
        <button type="button" className="delSkill">
          DELETE
        </button>
      </div>
    );
  }
}

export default Skill;
