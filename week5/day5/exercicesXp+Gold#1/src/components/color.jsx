import React, { useState, useEffect } from "react";

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
  });

  const changeToBlue = () => {
    setFavoriteColor("blue");
  };

  return (
    <section>
      <h2>My Favorite Color is {favoriteColor}</h2>
      <button type="button" onClick={changeToBlue}>
        Change to Blue
      </button>
    </section>
  );
}

export default Color;