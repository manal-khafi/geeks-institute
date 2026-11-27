import React from 'react';

function FormComponent(props) {
  const {
    firstName,
    lastName,
    age,
    gender,
    destination,
    nutsFree,
    lactoseFree,
    vegan,
  } = props.data;

  return (
    <div className="form-page">
      <div className="form-header">
        <h1>Sample form</h1>
      </div>

      <form method="GET" className="form-body">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={props.handleChange}
          className="field-input"
        />
        <br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={props.handleChange}
          className="field-input"
        />
        <br />

        <input
          type="text"
          name="age"
          placeholder="Age"
          value={age}
          onChange={props.handleChange}
          className="field-input"
        />
        <br />
        <br />

        <label className="inline-option">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={props.handleChange}
          />{' '}
          Male
        </label>
        <br />

        <label className="inline-option">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={props.handleChange}
          />{' '}
          Female
        </label>
        <br />
        <br />

        <label htmlFor="destination" className="group-label">
          Select your destination
        </label>
        <br />
        <select
          id="destination"
          name="destination"
          value={destination}
          onChange={props.handleChange}
          className="select-input"
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
        </select>
        <br />
        <br />

        <span className="group-label">Dietary restrictions:</span>
        <div className="checkbox-list">
          <label className="inline-option">
            <input
              type="checkbox"
              name="nutsFree"
              checked={nutsFree}
              onChange={props.handleChange}
            />{' '}
            Nuts free
          </label>
          <br />

          <label className="inline-option">
            <input
              type="checkbox"
              name="lactoseFree"
              checked={lactoseFree}
              onChange={props.handleChange}
            />{' '}
            Lactose free
          </label>
          <br />

          <label className="inline-option">
            <input
              type="checkbox"
              name="vegan"
              checked={vegan}
              onChange={props.handleChange}
            />{' '}
            Vegan
          </label>
        </div>
        <br />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      <div className="info-panel">
        <h2>Entered information:</h2>
        <p className="summary-line">
          Your name: {firstName} {lastName}
        </p>
        <p className="summary-line">Your age: {age}</p>
        <p className="summary-line">Your gender: {gender}</p>
        <p className="summary-line">Your destination: {destination}</p>
        <p className="summary-line">Your dietary restrictions:</p>
        <div className="dietary-results">
          <p>**Nuts free : {nutsFree ? 'Yes' : 'No'}</p>
          <p>**Lactose free : {lactoseFree ? 'Yes' : 'No'}</p>
          <p>**Vegan meal : {vegan ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;