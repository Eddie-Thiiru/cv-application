import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Overview from "./components/Overview";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      form: "active",
      general: {
        firstName: { text: "" },
        surname: { text: "" },
        profession: { text: "" },
        city: { text: "" },
        country: { text: "" },
        address: { text: "" },
        postcode: { text: "" },
        phone: { text: "" },
        email: { text: "" },
      },
      work: {
        jobTitle: { text: "" },
        employer: { text: "" },
        workStartDate: { text: "" },
        workEndDate: { text: "" },
        workDescription: { text: "" },
      },
      education: {
        school: { text: "" },
        degree: { text: "" },
        field: { text: "" },
        schoolStartDate: { text: "" },
        schoolEndDate: { text: "" },
      },
      skills: { skill: { text: "" }, level: { text: "" } },
      summary: { text: "" },
      data: [],
    };

    this.handleGeneralChange = this.handleGeneralChange.bind(this);

    this.handleWorkChange = this.handleWorkChange.bind(this);

    this.handleEducationChange = this.handleEducationChange.bind(this);

    this.handleSkillChange = this.handleSkillChange.bind(this);

    this.handleSummaryChange = this.handleSummaryChange.bind(this);

    this.onSubmitForm = this.onSubmitForm.bind(this);

    this.editCV = this.editCV.bind(this);
  }

  handleGeneralChange = (e) => {
    const inputName = e.target.name;

    this.setState({
      general: {
        ...this.state.general,
        [inputName]: {
          text: e.target.value,
        },
      },
    });
  };

  handleWorkChange = (e) => {
    const inputName = e.target.name;

    this.setState({
      work: {
        ...this.state.work,
        [inputName]: {
          text: e.target.value,
        },
      },
    });
  };

  handleEducationChange = (e) => {
    const inputName = e.target.name;

    this.setState({
      education: {
        ...this.state.education,
        [inputName]: {
          text: e.target.value,
        },
      },
    });
  };

  handleSkillChange = (e) => {
    const inputName = e.target.name;

    this.setState({
      skills: {
        ...this.state.skills,
        [inputName]: {
          text: e.target.value,
        },
      },
    });
  };

  handleSummaryChange = (e) => {
    this.setState({
      summary: {
        text: e.target.value,
      },
    });
  };

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
      form: "submitted",
    });
  };

  editCV = (e) => {
    this.setState({
      data: this.state.data,
      form: "active",
    });
  };

  render() {
    const { form, general, work, education, skills, summary, data } =
      this.state;

    let content =
      form === "active" ? (
        <Form
          generalSection={general}
          workSection={work}
          educationSection={education}
          skillSection={skills}
          summarySection={summary}
          inputGeneralChange={this.handleGeneralChange}
          inputWorkChange={this.handleWorkChange}
          inputEducationChange={this.handleEducationChange}
          inputSkillChange={this.handleSkillChange}
          inputSummaryChange={this.handleSummaryChange}
          onSubmitCV={this.onSubmitForm}
        />
      ) : (
        <Overview formData={data} edit={this.editCV} />
      );

    return (
      <div className="app">
        <Header />
        <div className="main">{content}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
