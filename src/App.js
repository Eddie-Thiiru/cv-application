import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      form: "empty",
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
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
      form: "submitted",
    });
  };

  render() {
    const { data, form } = this.state;

    let content =
      form === "empty" ? <Form onSubmit={this.onSubmitForm} /> : "YEAH";

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
