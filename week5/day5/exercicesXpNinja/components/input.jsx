import React from "react";

function Input({ label, name, value, onChange, onBlur, errors = [], placeholder }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label
        htmlFor={name}
        style={{ display: "block", marginBottom: "6px", color: "#334155", fontSize: "0.95rem" }}
      >
        {label}
      </label>
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        style={{
          width: "100%",
          padding: "8px 10px",
          border: "1px solid #cbd5e1",
          borderRadius: "4px",
          fontSize: "0.95rem",
        }}
      />
      {errors.map((errMsg) => (
        <p
          key={errMsg}
          style={{
            color: "#e11d48",
            fontSize: "0.85rem",
            fontWeight: 600,
            marginTop: "4px",
            textAlign: "right",
          }}
        >
          {errMsg}
        </p>
      ))}
    </div>
  );
}

export default Input;