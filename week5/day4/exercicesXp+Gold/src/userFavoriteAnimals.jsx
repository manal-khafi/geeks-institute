import React from "react";

function UserFavoriteAnimals({ favAnimals }) {
  return (
    <section className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800">Favorite Animals</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {favAnimals.map((animal, index) => (
          <li key={`${animal}-${index}`}>{animal}</li>
        ))}
      </ul>
    </section>
  );
}

export default UserFavoriteAnimals;