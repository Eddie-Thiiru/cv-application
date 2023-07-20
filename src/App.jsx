import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Overview from "./components/Overview";
import { v4 as uuidv4 } from "uuid";
import "./styles/App.css";

const App = () => {
  const [status, setStatus] = useState("active");
  const [general, setGeneral] = useState({
    firstName: "",
    surname: "",
    profession: "",
    city: "",
    country: "",
    address: "",
    postcode: "",
    phone: "",
    email: "",
  });
  const [work, setWork] = useState([
    {
      jobTitle: "",
      employer: "",
      workStartDate: "",
      workEndDate: "",
      workDescription: "",
      checkboxState: false,
      id: uuidv4(),
    },
  ]);
  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      field: "",
      schoolStartDate: "",
      schoolEndDate: "",
      checkboxState: false,
      id: uuidv4(),
    },
  ]);
  const [skills, setSkills] = useState([
    { skill: "", level: "Novice", id: uuidv4() },
  ]);
  const [summary, setSummary] = useState({ text: "" });

  const handleGeneralChange = (e) => {
    const inputName = e.target.name;

    setGeneral({
      ...general,
      [inputName]: e.target.value,
    });
  };

  const handleWorkChange = (e) => {
    const inputName = e.target.name;
    const inputIndex = parseInt(e.target.dataset.key);

    if (inputName === "jobCheckbox") {
      setWork(
        work.map((item, index) => {
          let value = e.target.value === "unchecked" ? true : false;

          if (index === inputIndex) {
            return { ...item, checkboxState: value };
          } else {
            return item;
          }
        })
      );
    } else {
      setWork(
        work.map((item, index) => {
          if (index === inputIndex) {
            return { ...item, [inputName]: e.target.value };
          } else {
            return item;
          }
        })
      );
    }
  };

  const handleEducationChange = (e) => {
    const inputName = e.target.name;
    const inputIndex = parseInt(e.target.dataset.key);

    if (inputName === "schoolCheckbox") {
      setEducation(
        education.map((item, index) => {
          let value = e.target.value === "unchecked" ? true : false;

          if (index === inputIndex) {
            return { ...item, checkboxState: value };
          } else {
            return item;
          }
        })
      );
    } else {
      setEducation(
        education.map((item, index) => {
          if (index === inputIndex) {
            return { ...item, [inputName]: e.target.value };
          } else {
            return item;
          }
        })
      );
    }
  };

  const handleSkillChange = (e) => {
    const inputName = e.target.name;
    const inputIndex = parseInt(e.target.dataset.key);

    setSkills(
      skills.map((item, index) => {
        if (index === inputIndex) {
          return { ...item, [inputName]: e.target.value };
        } else {
          return item;
        }
      })
    );
  };

  const handleSummaryChange = (e) => {
    setSummary({
      text: e.target.value,
    });
  };

  const addWork = () => {
    setWork([
      ...work,
      {
        jobTitle: "",
        employer: "",
        workStartDate: "",
        workEndDate: "",
        workDescription: "",
        checkboxState: false,
        id: uuidv4(),
      },
    ]);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        school: "",
        degree: "",
        field: "",
        schoolStartDate: "",
        schoolEndDate: "",
        checkboxState: false,
        id: uuidv4(),
      },
    ]);
  };

  const addSkill = () => {
    setSkills([...skills, { skill: "", level: "Novice", id: uuidv4() }]);
  };

  const removeWork = (e) => {
    setWork(work.filter((item) => item.id !== e.target.id));
  };

  const removeEducation = (e) => {
    setEducation(education.filter((item) => item.id !== e.target.id));
  };

  const removeSkill = (e) => {
    setSkills(skills.filter((item) => item.id !== e.target.id));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    setStatus("submitted");
  };

  const editCV = (e) => {
    setStatus("active");
  };

  let content =
    status === "active" ? (
      <Form
        generalData={general}
        workArray={work}
        educationArray={education}
        skillsArray={skills}
        summaryData={summary}
        inputGeneralChange={handleGeneralChange}
        inputWorkChange={handleWorkChange}
        inputEducationChange={handleEducationChange}
        inputSkillChange={handleSkillChange}
        inputSummaryChange={handleSummaryChange}
        addWork={addWork}
        addEducation={addEducation}
        addSkill={addSkill}
        removeWork={removeWork}
        removeEducation={removeEducation}
        removeSkill={removeSkill}
        onSubmitCV={onSubmitForm}
      />
    ) : (
      <Overview
        generalData={general}
        workArray={work}
        educationArray={education}
        skillsArray={skills}
        summaryData={summary}
        edit={editCV}
      />
    );

  return (
    <div className="app">
      <Header />
      <div className="main">{content}</div>
      <Footer />
    </div>
  );
};

export default App;
