import React, { Component } from "react";
import "../styles/General.css";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: { text: "" },
      surName: { text: "" },
      profession: { text: "" },
      city: { text: "" },
      country: { text: "" },
      address: { text: "" },
      postcode: { text: "" },
      phone: { text: "" },
      email: { text: "" },
    };
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: {
        text: e.target.value,
      },
    });
  };

  handleSurNameChange = (e) => {
    this.setState({
      surName: {
        text: e.target.value,
      },
    });
  };

  handleProfessionChange = (e) => {
    this.setState({
      profession: {
        text: e.target.value,
      },
    });
  };

  handleCityChange = (e) => {
    this.setState({
      city: {
        text: e.target.value,
      },
    });
  };

  handleCountryChange = (e) => {
    this.setState({
      country: {
        text: e.target.value,
      },
    });
  };

  handleAddressChange = (e) => {
    this.setState({
      address: {
        text: e.target.value,
      },
    });
  };

  handleCodeChange = (e) => {
    this.setState({
      postcode: {
        text: e.target.value,
      },
    });
  };

  handlePhoneChange = (e) => {
    this.setState({
      phone: {
        text: e.target.value,
      },
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: {
        text: e.target.value,
      },
    });
  };

  render() {
    const {
      firstName,
      surName,
      profession,
      city,
      country,
      address,
      postcode,
      phone,
      email,
    } = this.state;

    return (
      <div className="general">
        <div className="wrapper">
          <div>
            <label htmlFor="firstNameInput">First Name</label>
            <input
              onChange={this.handleFirstNameChange}
              defaultValue={firstName.text}
              type="text"
              id="firstNameInput"
              name="firstName"
              placeholder="e.g. John"
            />
          </div>
          <div>
            <label htmlFor="surnameInput">Surname</label>
            <input
              onChange={this.handleSurNameChange}
              defaultValue={surName.text}
              type="text"
              id="surnameInput"
              name="surname"
              placeholder="e.g. Doe"
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="professionInput">Profession</label>
            <input
              onChange={this.handleProfessionChange}
              defaultValue={profession.text}
              type="text"
              id="professionInput"
              name="profession"
              placeholder="e.g. Software Developer"
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="postalInput">Postal Address</label>
            <input
              onChange={this.handleAddressChange}
              defaultValue={address.text}
              type="number"
              id="postalAddressInput"
              name="postalAddress"
              placeholder="e.g. 72186"
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="cityInput">City</label>
            <input
              onChange={this.handleCityChange}
              defaultValue={city.text}
              type="text"
              id="cityInput"
              name="city"
              placeholder="e.g. Nairobi"
            />
          </div>
          <div>
            <label htmlFor="countryInput">Country</label>
            <input
              onChange={this.handleCountryChange}
              defaultValue={country.text}
              type="text"
              id="countryInput"
              name="country"
              placeholder="e.g. Kenya"
            />
          </div>
          <div>
            <label htmlFor="postalInput">Postcode</label>
            <input
              onChange={this.handleCodeChange}
              defaultValue={postcode.text}
              type="number"
              id="postalCodeInput"
              name="postcode"
              placeholder="e.g. 00200"
            />
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="phoneInput">Phone</label>
            <input
              onChange={this.handlePhoneChange}
              defaultValue={phone.text}
              type="tel"
              id="phoneInput"
              name="phone"
              placeholder="e.g. +254700000000"
            />
          </div>
          <div>
            <label htmlFor="emailInput">Email Address</label>
            <input
              onChange={this.handleEmailChange}
              defaultValue={email.text}
              type="email"
              id="emailInput"
              name="email"
              placeholder="e.g. example@gmail.com"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default General;
