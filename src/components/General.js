import React, { Component } from "react";
import "../styles/General.css";

class General extends Component {
  render() {
    return (
      <div className="general">
        <div className="wrapper">
          <div>
            <label htmlFor="firstNameInput">First Name</label>
            <input
              type="text"
              id="firstNameInput"
              name="firstName"
              placeholder="e.g. John"
            ></input>
          </div>
          <div>
            <label htmlFor="surnameInput">Surname</label>
            <input
              type="text"
              id="surnameInput"
              name="surname"
              placeholder="e.g. Doe"
            ></input>
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="professionInput">Profession</label>
            <input
              type="text"
              id="professionInput"
              name="profession"
              placeholder="e.g. Software Developer"
            ></input>
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="cityInput">City</label>
            <input
              type="text"
              id="cityInput"
              name="city"
              placeholder="e.g. Nairobi"
            ></input>
          </div>
          <div>
            <label htmlFor="countryInput">Country</label>
            <input
              type="text"
              id="countryInput"
              name="country"
              placeholder="e.g. Kenya"
            ></input>
          </div>
          <div>
            <label htmlFor="postalInput">Postal Code</label>
            <input
              type="number"
              id="postalInput"
              name="postalCode"
              placeholder="e.g. 43118"
            ></input>
          </div>
        </div>
        <div className="wrapper">
          <div>
            <label htmlFor="phoneInput">Phone</label>
            <input
              type="tel"
              id="phoneInput"
              name="phone"
              placeholder="e.g. +254 700000000"
            ></input>
          </div>
          <div>
            <label htmlFor="emailInput">Email</label>
            <input
              type="email"
              id="emailInput"
              name="email"
              placeholder="e.g. example@gmail.com"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default General;
