import React, { useState } from "react";

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert("I was clicked");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`You entered: ${event.target.value}`);
    }
  };

  const toggleSwitch = () => {
    setIsToggleOn((prev) => !prev);
  };

  return (
    <section>
      <h2>Events</h2>

      <button type="button" onClick={clickMe}>
        Click Me
      </button>

      <div>
        <input
          type="text"
          placeholder="Press Enter here..."
          onKeyDown={handleKeyDown}
        />
      </div>

      <div>
        <button type="button" onClick={toggleSwitch}>
          {isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    </section>
  );
}

export default Events;