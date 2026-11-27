import React, { useState } from "react";
import Garage from "./garage";

function Car({ carInfo }) {
  const [color, setColor] = useState("red");

  return (
    <section>
      <h2>
        This car is {color} {carInfo.model}
      </h2>
      <Garage size="small" />
    </section>
  );
}

export default Car;