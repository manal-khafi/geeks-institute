import React, { useState } from "react";

function Forms() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(null);
  const [errormessage, setErrormessage] = useState("");
  const [bio, setBio] = useState("Write a short note here...");
  const [carBrand, setCarBrand] = useState("Volvo");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "age") {
      if (value !== "" && Number.isNaN(Number(value))) {
        alert("Age must be a number");
        setErrormessage("Your age must be a number");
      } else {
        setErrormessage("");
      }
      setAge(value === "" ? null : value);
    } else if (name === "bio") {
      setBio(value);
    } else if (name === "carBrand") {
      setCarBrand(value);
    }
  };

  const mySubmitHandler = (event) => {
    event.preventDefault();
    if (age !== null && age !== "" && Number.isNaN(Number(age))) {
      setErrormessage("Your age must be a number");
      return;
    }
    alert(`You are submitting ${username}`);
  };

  let header = null;
  if (username) {
    header = age ? (
      <h2>
        Hello {username}, you are {age} years old
      </h2>
    ) : (
      <h2>Hello {username}</h2>
    );
  }

  return (
    <section>
      {header}

      <form onSubmit={mySubmitHandler}>
        <div>
          <label htmlFor="username">Enter your name: </label>
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="age">Enter your age: </label>
          <input
            id="age"
            type="text"
            name="age"
            value={age ?? ""}
            onChange={handleChange}
          />
          {errormessage && <p style={{ color: "red" }}>{errormessage}</p>}
        </div>

        <div>
          <label htmlFor="bio">Notes: </label>
          <textarea
            id="bio"
            name="bio"
            value={bio}
            onChange={handleChange}
            rows={3}
          />
        </div>

        <div>
          <label htmlFor="carBrand">Select a car: </label>
          <select
            id="carBrand"
            name="carBrand"
            value={carBrand}
            onChange={handleChange}
          >
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
            <option value="Toyota">Toyota</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Forms;