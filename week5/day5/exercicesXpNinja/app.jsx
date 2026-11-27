import React from "react";
import Clock from "./components/clock";
import Form from "./components/form";

function App() {
  return (
    <main style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "32px" }}>
      <Clock />
      <hr />
      <Form />
    </main>
  );
}

export default App;