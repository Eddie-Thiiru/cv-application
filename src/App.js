import React, { Component } from "react";
import Card from "./components/Card";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Summary from "./components/Summary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card>
          <General />
        </Card>
        <Card>
          <Education />
        </Card>
        <Card></Card>
        <Card>
          <Work />
        </Card>
        <Card>
          <Skill />
        </Card>
        <Card>
          <Summary />
        </Card>
      </div>
    );
  }
}

export default App;
