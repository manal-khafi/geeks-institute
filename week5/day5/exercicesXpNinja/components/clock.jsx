import React, { useState, useEffect } from "react";

function Clock() {
  const [currentDate, setCurrentDate] = useState(() => new Date());

  const tick = () => {
    setCurrentDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <section>
      <h2>Hello, world!</h2>
      <p>It is {currentDate.toLocaleTimeString()}.</p>
    </section>
  );
}

export default Clock;