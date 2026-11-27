import React, { useState } from "react";

function NewBookForm() {
  const [formData, setFormData] = useState({
    Title: "",
    Author: "",
    Genre: "",
    YearReleased: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      Title: formData.Title,
      Author: formData.Author,
      Genre: formData.Genre,
      YearReleased: formData.YearReleased,
    };
    setSubmittedData(payload);
    setIsSent(true);
    console.log(payload);
  };

  return (
    <section style={{ maxWidth: "360px", fontFamily: "Arial, sans-serif" }}>
      <h1>New Book</h1>

      {isSent && <p>data sent!</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "8px" }}>
          <label htmlFor="book-title">Title </label>
          <input
            id="book-title"
            type="text"
            name="Title"
            value={formData.Title}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: "8px" }}>
          <label htmlFor="book-author">Author </label>
          <input
            id="book-author"
            type="text"
            name="Author"
            value={formData.Author}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: "8px" }}>
          <label htmlFor="book-genre">Genre </label>
          <input
            id="book-genre"
            type="text"
            name="Genre"
            value={formData.Genre}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="book-year">Year Published </label>
          <input
            id="book-year"
            type="text"
            name="YearReleased"
            value={formData.YearReleased}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && null}
    </section>
  );
}

export default NewBookForm;