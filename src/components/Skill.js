import React, { Component } from "react";

class Skill extends Component {
  render() {
    return (
      <div className="skill">
        <form className="generalForm">
          <h3>Skills</h3>
          <section>
            <div>
              <label htmlFor="skillInput"></label>
              <input type="text" id="skillInput"></input>
            </div>
            <div>
              <fieldset>
                <div>
                  <label htmlFor="oneStar"></label>
                  <input type="radio" id="oneStar" value="novice"></input>
                </div>
                <div>
                  <label htmlFor="twoStar"></label>
                  <input type="radio" id="twoStar" value="intermediate"></input>
                </div>
                <div>
                  <label htmlFor="threeStar"></label>
                  <input type="radio" id="threeStar" value="advanced"></input>
                </div>
                <div>
                  <label htmlFor="fourStar"></label>
                  <input type="radio" id="fourStar" value="superior"></input>
                </div>
                <div>
                  <label htmlFor="fiveStar"></label>
                  <input type="radio" id="fiveStar" value="expert"></input>
                </div>
              </fieldset>
            </div>
          </section>
          <button type="submit">ADD</button>
        </form>
      </div>
    );
  }
}

export default Skill;
