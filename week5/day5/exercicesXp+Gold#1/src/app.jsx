import React from "react";
import Car from "./components/car";
import Events from "./components/events";
import Phone from "./components/phone";
import Color from "./components/color";
import Forms from "./components/forms";

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <main style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <Car carInfo={carinfo} />
      <hr />
      <Events />
      <hr />
      <Phone />
      <hr />
      <Color />
      <hr />
      <Forms />
    </main>
  );
}

export default App;