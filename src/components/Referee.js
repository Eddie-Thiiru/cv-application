import React, { Component } from "react";

class Referee extends Component {
  render() {
    return (
      <div className="referee">
        <form className="generalForm">
          <h3>General Information</h3>
          <section>
            <div>
              <label htmlFor="firstName"></label>
              <input type="text" id="firstName"></input>
            </div>
            <div>
              <label htmlFor="sirName"></label>
              <input type="text" id="sirName"></input>
            </div>
          </section>
          <section>
            <div>
              <label htmlFor=""></label>
              <input type=""></input>
            </div>
          </section>
          <section>
            <div>
              <label htmlFor=""></label>
              <input type=""></input>
            </div>
            <div>
              <label htmlFor=""></label>
              <input type=""></input>
            </div>
            <div>
              <label htmlFor=""></label>
              <input type=""></input>
            </div>
          </section>
          <section>
            <div>
              <label htmlFor=""></label>
              <input type=""></input>
            </div>
            <div>
              <label htmlFor=""></label>
              <input type=""></input>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default Referee;
