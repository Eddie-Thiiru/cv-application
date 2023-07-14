import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Overview from "./components/Overview";
import uniqid from "uniqid";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      form: "active",
      general: {
        firstName: "",
        surname: "",
        profession: "",
        city: "",
        country: "",
        address: "",
        postcode: "",
        phone: "",
        email: "",
      },
      work: [
        {
          jobTitle: "",
          employer: "",
          workStartDate: "",
          workEndDate: "",
          workDescription: "",
          checkboxState: false,
          id: uniqid(),
        },
      ],

      education: [
        {
          school: "",
          degree: "",
          field: "",
          schoolStartDate: "",
          schoolEndDate: "",
          checkboxState: false,
          id: uniqid(),
        },
      ],
      skills: [{ skill: "", level: "", id: uniqid() }],
      summary: { text: "" },
    };

    this.handleGeneralChange = this.handleGeneralChange.bind(this);

    this.handleWorkChange = this.handleWorkChange.bind(this);

    this.handleEducationChange = this.handleEducationChange.bind(this);

    this.handleSkillChange = this.handleSkillChange.bind(this);

    this.handleSummaryChange = this.handleSummaryChange.bind(this);

    this.addWork = this.addWork.bind(this);

    this.addEducation = this.addEducation.bind(this);

    this.addSkill = this.addSkill.bind(this);

    this.removeWork = this.removeWork.bind(this);

    this.removeEducation = this.removeEducation.bind(this);

    this.removeSkill = this.removeSkill.bind(this);

    this.onSubmitForm = this.onSubmitForm.bind(this);

    this.editCV = this.editCV.bind(this);
  }

  handleGeneralChange = (e) => {
    const inputName = e.target.name;

    this.setState({
      general: {
        ...this.state.general,
        [inputName]: e.target.value,
      },
    });
  };

  handleWorkChange = (e) => {
    const inputName = e.target.name;
    const inputIndex = parseInt(e.target.dataset.key);

    if (inputName === "jobCheckbox") {
      this.setState({
        work: this.state.work.map((item, index) => {
          let value = e.target.value === "unchecked" ? true : false;

          if (index === inputIndex) {
            return { ...item, checkboxState: value };
          } else {
            return item;
          }
        }),
      });
    } else {
      this.setState({
        work: this.state.work.map((item, index) => {
          if (index === inputIndex) {
            return { ...item, [inputName]: e.target.value };
          } else {
            return item;
          }
        }),
      });
    }
  };

  handleEducationChange = (e) => {
    const inputName = e.target.name;
    const inputIndex = parseInt(e.target.dataset.key);

    if (inputName === "schoolCheckbox") {
      this.setState({
        education: this.state.education.map((item, index) => {
          let value = e.target.value === "unchecked" ? true : false;

          if (index === inputIndex) {
            return { ...item, checkboxState: value };
          } else {
            return item;
          }
        }),
      });
    } else {
      this.setState({
        education: this.state.education.map((item, index) => {
          if (index === inputIndex) {
            return { ...item, [inputName]: e.target.value };
          } else {
            return item;
          }
        }),
      });
    }
  };

  handleSkillChange = (e) => {
    const inputName = e.target.name;
    const inputIndex = parseInt(e.target.dataset.key);

    this.setState({
      skills: this.state.skills.map((item, index) => {
        if (index === inputIndex) {
          return { ...item, [inputName]: e.target.value };
        } else {
          return item;
        }
      }),
    });
  };

  handleSummaryChange = (e) => {
    this.setState({
      summary: {
        text: e.target.value,
      },
    });
  };

  addWork = () => {
    this.setState({
      work: [
        ...this.state.work,
        {
          jobTitle: "",
          employer: "",
          workStartDate: "",
          workEndDate: "",
          workDescription: "",
          checkboxState: false,
          id: uniqid(),
        },
      ],
    });
  };

  addEducation = () => {
    this.setState({
      education: [
        ...this.state.education,
        {
          school: "",
          degree: "",
          field: "",
          schoolStartDate: "",
          schoolEndDate: "",
          checkboxState: false,
          id: uniqid(),
        },
      ],
    });
  };

  addSkill = () => {
    this.setState({
      skills: [...this.state.skills, { skill: "", level: "", id: uniqid() }],
    });
  };

  removeWork = (e) => {
    this.setState({
      work: this.state.work.filter((item) => item.id !== e.target.id),
    });
  };

  removeEducation = (e) => {
    this.setState({
      education: this.state.education.filter((item) => item.id !== e.target.id),
    });
  };

  removeSkill = (e) => {
    this.setState({
      skills: this.state.skills.filter((item) => item.id !== e.target.id),
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    this.setState({
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
          generalData={general}
          workArray={work}
          educationArray={education}
          skillsArray={skills}
          summaryData={summary}
          inputGeneralChange={this.handleGeneralChange}
          inputWorkChange={this.handleWorkChange}
          inputEducationChange={this.handleEducationChange}
          inputSkillChange={this.handleSkillChange}
          inputSummaryChange={this.handleSummaryChange}
          addWork={this.addWork}
          addEducation={this.addEducation}
          addSkill={this.addSkill}
          removeWork={this.removeWork}
          removeEducation={this.removeEducation}
          removeSkill={this.removeSkill}
          onSubmitCV={this.onSubmitForm}
        />
      ) : (
        <Overview
          generalData={general}
          workArray={work}
          educationArray={education}
          skillsArray={skills}
          summaryData={summary}
          edit={this.editCV}
        />
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
