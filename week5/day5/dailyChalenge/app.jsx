import React, { useState } from "react";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const handleVote = (indexToUpdate) => {
    setLanguages((prevLanguages) =>
      prevLanguages.map((lang, index) =>
        index === indexToUpdate ? { ...lang, votes: lang.votes + 1 } : lang
      )
    );
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "40px 16px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "460px",
          padding: "28px 36px 36px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
          border: "1px solid #f1f5f9",
          backgroundColor: "#ffffff",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.25rem",
            fontWeight: 700,
            marginBottom: "28px",
            color: "#111827",
          }}
        >
          Vote Your Language!
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {languages.map((language, index) => (
            <div
              key={language.name}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr auto",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "#faeccd",
                border: "1px solid #4b5563",
                padding: "16px 24px",
                fontSize: "1.25rem",
              }}
            >
              <span style={{ textAlign: "center", color: "#111827" }}>
                {language.votes}
              </span>
              <span style={{ textAlign: "center", color: "#111827" }}>
                {language.name}
              </span>
              <button
                type="button"
                onClick={() => handleVote(index)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#15803d",
                  fontSize: "1.35rem",
                  cursor: "pointer",
                  padding: "0 4px",
                }}
              >
                Click Here
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;