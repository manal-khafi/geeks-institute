import React from "react";

const planets = [
  "Mars",
  "Venus",
  "Jupiter",
  "Earth",
  "Saturn",
  "Neptune",
];

function PlanetsList() {
  return (
    <ul className="max-w-md mx-auto mt-6">
      {planets.map((planet) => (
        <li
          key={planet}
          className="border border-gray-200 p-3 mb-2 rounded bg-gray-100 text-gray-800 font-medium"
        >
          {planet}
        </li>
      ))}
    </ul>
  );
}

export default PlanetsList;