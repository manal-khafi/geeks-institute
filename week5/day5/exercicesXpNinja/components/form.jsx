import React, { useState } from "react";
import Input from "./input";

const NAME_REGEX = /\S+/;
const PHONE_REGEX = /^\+?[0-9\s\-()]{7,15}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

function validateField(name, rawValue) {
  const value = typeof rawValue === "string" ? rawValue.trim() : "";
  const fieldErrors = [];

  if (name === "firstName") {
    if (!NAME_REGEX.test(value)) {
      fieldErrors.push("First name is required");
    }
  } else if (name === "lastName") {
    if (!NAME_REGEX.test(value)) {
      fieldErrors.push("Last name is required");
    }
  } else if (name === "phone") {
    if (!PHONE_REGEX.test(value)) {
      fieldErrors.push("Phone number is invalid");
    }
  } else if (name === "email") {
    if (!NAME_REGEX.test(value)) {
      fieldErrors.push("Email is required");
    }
    if (!EMAIL_REGEX.test(value)) {
      fieldErrors.push("Email is invalid");
    }
  }

  return fieldErrors;
}

function validateAll(values) {
  return {
    firstName: validateField("firstName", values.firstName),
    lastName: validateField("lastName", values.lastName),
    phone: validateField("phone", values.phone),
    email: validateField("email", values.email),
  };
}

function Form() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedValues = { ...values, [name]: value };
    setValues(updatedValues);
    setSubmitted(false);

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateAll(values);
    setErrors(nextErrors);

    const hasAnyError = Object.values(nextErrors).some((list) => list.length > 0);
    setSubmitted(!hasAnyError);
  };

  return (
    <section
      style={{
        maxWidth: "360px",
        padding: "24px",
        backgroundColor: "#f8fafc",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Form Validation</h2>

      <form onSubmit={handleSubmit}>
        <Input
          label="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.firstName}
        />

        <Input
          label="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.lastName}
        />

        <Input
          label="Phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.phone}
        />

        <Input
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.email}
        />

        <button
          type="submit"
          style={{
            padding: "8px 16px",
            backgroundColor: "#0f172a",
            color: "#ffffff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Validate &amp; Submit
        </button>

        {submitted && (
          <p style={{ color: "#15803d", fontWeight: 600, marginTop: "12px" }}>
            All fields are valid!
          </p>
        )}
      </form>
    </section>
  );
}

export default Form;