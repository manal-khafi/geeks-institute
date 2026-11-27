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
    <main className="container">
      <header className="form-header">
        <h1>Sample form</h1>
      </header>

      <form className="form-section">
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={props.handleChange}
          placeholder="First Name"
          className="text-input"
        />
        <br />

        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={props.handleChange}
          placeholder="Last Name"
          className="text-input"
        />
        <br />

        <input
          type="number"
          name="age"
          value={age}
          onChange={props.handleChange}
          placeholder="Age"
          className="text-input"
        />
        <br />
        <br />

        <label>
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

        <label>
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

        <label className="section-label">Select your destination</label>
        <br />
        <select
          name="destination"
          value={destination}
          onChange={props.handleChange}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
        </select>
        <br />
        <br />

        <label className="section-label">Dietary restrictions:</label>
        <br />
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="nutsFree"
              checked={nutsFree}
              onChange={props.handleChange}
            />{' '}
            Nuts free
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="lactoseFree"
              checked={lactoseFree}
              onChange={props.handleChange}
            />{' '}
            Lactose free
          </label>
          <br />

          <label>
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

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      <hr />

      <section className="output-section">
        <h2>Entered information:</h2>
        <p className="italic-line">
          Your name: {firstName} {lastName}
        </p>
        <p className="italic-line">Your age: {age}</p>
        <p className="italic-line">Your gender: {gender}</p>
        <p className="italic-line">Your destination: {destination}</p>
        <p className="italic-line">Your dietary restrictions:</p>
        <div className="restrictions-list">
          <p>**Nuts free : {nutsFree ? 'Yes' : 'No'}</p>
          <p>**Lactose free : {lactoseFree ? 'Yes' : 'No'}</p>
          <p>**Vegan meal : {vegan ? 'Yes' : 'No'}</p>
        </div>
      </section>
    </main>
  );
}

export default FormComponent;