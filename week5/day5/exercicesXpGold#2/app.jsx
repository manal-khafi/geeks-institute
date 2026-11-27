import React from "react";
import NewBookForm from "./components/newBookForm";
import UserInfoForm from "./components/userInfoForm";

function App() {
  return (
    <main style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "36px" }}>
      <NewBookForm />
      <hr />
      <UserInfoForm />
    </main>
  );
}

export default App;