import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Summary from "./components/Summary";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  onSubmitForm = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    let array = [];

    for (let key in formData) {
      let obj = { [key]: formData[key] };
      array.push(obj);
    }

    this.setState({
      data: this.state.data.concat(array),
    });
  };

  render() {
    const { inputData, formData } = this.state;

    return (
      <div className="app">
        <Header />
        <div className="main">
          <form onSubmit={this.onSubmitForm} className="form">
            <section>
              <h3>Personal Information</h3>
              <General />
            </section>
            <section>
              <h3>Work History</h3>
              <div className="workContainer">
                <Work />
              </div>
              <button type="button" className="workAddBtn">
                Add Work
              </button>
            </section>
            <section>
              <h3>Education</h3>
              <div className="educationContainer">
                <Education />
              </div>
              <button type="submit">Add</button>
            </section>
            <section>
              <h3>Skills</h3>
              <div className="skillContainer">
                <Skill />
              </div>
              <button type="submit">ADD</button>
            </section>
            <section>
              <Summary />
            </section>
            <button type="submit" className="submitBtn">
              Submit
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
