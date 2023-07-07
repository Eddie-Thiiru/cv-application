import React, { Component } from "react";

class General extends Component {
  render() {
    return (
      <div className="generalInformation">
        <form className="generalForm">
          <h3>General Information</h3>
          <section>
            <div>
              <label htmlFor="firstNameInput">First Name</label>
              <input
                type="text"
                id="firstNameInput"
                placeholder="e.g. John"
              ></input>
            </div>
            <div>
              <label htmlFor="surNameInput">Surname</label>
              <input
                type="text"
                id="surNameInput"
                placeholder="e.g. Doe"
              ></input>
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="professionInput">Profession</label>
              <input
                type="text"
                id="professionInput"
                placeholder="e.g. Software Developer"
              ></input>
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="cityInput">City</label>
              <input
                type="text"
                id="cityInput"
                placeholder="e.g. Nairobi"
              ></input>
            </div>
            <div>
              <label htmlFor="countryInput">Country</label>
              <input type="text" placeholder="e.g. Kenya"></input>
            </div>
            <div>
              <label htmlFor="postalInput">Postal Code</label>
              <input
                type="number"
                id="postalInput"
                placeholder="e.g. 43118"
              ></input>
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="phoneInput">Phone</label>
              <input
                type="tel"
                id="phoneInput"
                placeholder="e.g. +254 700000000"
              ></input>
            </div>
            <div>
              <label htmlFor="emailInput">Email</label>
              <input
                type="email"
                id="emailInput"
                placeholder="e.g. example@gmail.com"
              ></input>
            </div>
          </section>
        </form>
      </div>
    );
  }
}

export default General;
