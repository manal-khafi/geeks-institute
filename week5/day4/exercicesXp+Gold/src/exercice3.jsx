import React, { useState } from "react";
import "./exercise.css";

const styleHeader = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

function Exercise() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const items = ["JSX Expressions", "Props & Lists", "Inline & CSS Styling"];

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedName(name.trim());
  }

  return (
    <section className="exercise-box">
      <h1 style={styleHeader}>Exercise 3: HTML Tags &amp; Styling</h1>

      <p className="para">
        This paragraph uses the .para CSS class from Exercise.css.
      </p>

      <p className="mt-3 text-gray-700">
        Explore documentation at{" "}
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          React Official Docs
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="exercise-form">
        <label htmlFor="exercise-name" className="font-medium text-gray-800">
          Your Name:
        </label>
        <input
          id="exercise-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="border border-gray-300 rounded px-3 py-2 text-gray-900"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-fit"
        >
          Submit
        </button>
        {submittedName && (
          <p className="text-gray-800">Submitted by: {submittedName}</p>
        )}
      </form>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React logo"
        className="exercise-image"
      />

      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Exercise;