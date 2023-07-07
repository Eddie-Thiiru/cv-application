import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Summary from "./components/Summary";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Card>
          <General />
        </Card>
        <Card>
          <Education />
        </Card>
        <Card>
          <Work />
        </Card>
        <Card>
          <Skill />
        </Card>
        <Card>
          <Summary />
        </Card>
        <Footer />
      </div>
    );
  }
}

export default App;
