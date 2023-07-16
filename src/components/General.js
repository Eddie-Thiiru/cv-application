import React from "react";
import "../styles/General.css";

const General = (props) => {
  const { generalData, onInputChange } = props;
  const {
    firstName,
    surname,
    profession,
    city,
    country,
    address,
    postcode,
    phone,
    email,
  } = generalData;

  return (
    <div className="general">
      <div className="generalWrapper">
        <div>
          <label htmlFor="firstNameInput">First Name</label>
          <input
            onChange={onInputChange}
            defaultValue={firstName}
            type="text"
            id="firstNameInput"
            name="firstName"
            placeholder="e.g. John"
          />
        </div>
        <div>
          <label htmlFor="surnameInput">Surname</label>
          <input
            onChange={onInputChange}
            defaultValue={surname}
            type="text"
            id="surnameInput"
            name="surname"
            placeholder="e.g. Doe"
          />
        </div>
      </div>
      <div className="generalWrapper">
        <div>
          <label htmlFor="professionInput">Profession</label>
          <input
            onChange={onInputChange}
            defaultValue={profession}
            type="text"
            id="professionInput"
            name="profession"
            placeholder="e.g. Software Developer"
          />
        </div>
      </div>
      <div className="generalWrapper">
        <div>
          <label htmlFor="cityInput">City</label>
          <input
            onChange={onInputChange}
            defaultValue={city}
            type="text"
            id="cityInput"
            name="city"
            placeholder="e.g. Nairobi"
          />
        </div>
        <div>
          <label htmlFor="countryInput">Country</label>
          <input
            onChange={onInputChange}
            defaultValue={country}
            type="text"
            id="countryInput"
            name="country"
            placeholder="e.g. Kenya"
          />
        </div>
      </div>
      <div className="generalWrapper">
        <div>
          <label htmlFor="postalAddressInput">Postal Address</label>
          <input
            onChange={onInputChange}
            defaultValue={address}
            type="number"
            id="postalAddressInput"
            name="address"
            placeholder="e.g. 72186"
          />
        </div>
        <div>
          <label htmlFor="postalCodeInput">Postcode</label>
          <input
            onChange={onInputChange}
            defaultValue={postcode}
            type="number"
            id="postalCodeInput"
            name="postcode"
            placeholder="e.g. 00200"
          />
        </div>
      </div>
      <div className="generalWrapper">
        <div>
          <label htmlFor="phoneInput">Phone</label>
          <input
            onChange={onInputChange}
            defaultValue={phone}
            type="tel"
            id="phoneInput"
            name="phone"
            placeholder="e.g. +254700000000"
          />
        </div>
        <div>
          <label htmlFor="emailInput">Email Address</label>
          <input
            onChange={onInputChange}
            defaultValue={email}
            type="email"
            id="emailInput"
            name="email"
            placeholder="e.g. example@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default General;
