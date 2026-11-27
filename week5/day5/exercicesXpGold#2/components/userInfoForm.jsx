import React, { useState } from "react";

const initialUser = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

function UserInfoForm() {
  const [userData, setUserData] = useState(initialUser);
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) {
      setError("");
    }
  };

  const validateInputs = () => {
    const first = userData.firstName.trim();
    const last = userData.lastName.trim();
    const phoneDigits = userData.phone.trim();
    const emailValue = userData.email.trim();

    if (!first || !last) {
      return "Please enter both first name and last name.";
    }
    if (!/^\d{7,15}$/.test(phoneDigits)) {
      return "Please enter a valid phone number (7 to 15 digits).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    setUserData({
      firstName: userData.firstName.trim(),
      lastName: userData.lastName.trim(),
      phone: userData.phone.trim(),
      email: userData.email.trim(),
    });
    setError("");
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setUserData(initialUser);
    setError("");
    setIsSubmitted(false);
  };

  const renderContent = () =>
    isSubmitted ? (
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
          {userData.lastName}, {userData.firstName}
        </p>
        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          {userData.phone} | {userData.email}
        </p>
        <button
          type="button"
          onClick={handleReset}
          style={{ padding: "6px 28px", cursor: "pointer" }}
        >
          Reset
        </button>
      </div>
    ) : (
      <form
        onSubmit={handleSubmit}
        noValidate
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          maxWidth: "240px",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            color: "#1f4e46",
            marginBottom: "0.25rem",
          }}
        >
          Welcome!
        </h2>
        <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem", textAlign: "center" }}>
          Please provide your information below.
        </p>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={userData.firstName}
          onChange={handleChange}
          style={{ width: "100%", padding: "6px 8px" }}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={userData.lastName}
          onChange={handleChange}
          style={{ width: "100%", padding: "6px 8px" }}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={userData.phone}
          onChange={handleChange}
          style={{ width: "100%", padding: "6px 8px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={userData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "6px 8px" }}
        />

        {error && (
          <p
            style={{
              color: "#991b1b",
              fontSize: "0.85rem",
              textAlign: "center",
              margin: "2px 0",
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{ marginTop: "6px", padding: "6px 18px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>
    );

  return (
    <section
      style={{
        backgroundColor: "#d3d3d3",
        borderRadius: "90px",
        padding: "36px 28px",
        maxWidth: "340px",
        minHeight: "420px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Georgia, serif",
      }}
    >
      {renderContent()}
    </section>
  );
}

export default UserInfoForm;