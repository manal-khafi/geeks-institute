import React from "react";
import CelebrityCard from "./celebritycard";
import PlanetsList from "./planetsList";
import UserFavoriteAnimals from "./userFavoriteAnimals";
import Exercise from "./exercice3";

const celebrities = [
  {
    title: "Bob Dylan",
    imageUrl:
      "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
    description:
      "Bob Dylan is an American singer, songwriter and cultural icon who has influenced music for more than five decades.",
  },
  {
    title: "Paul McCartney",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
    description:
      "Paul McCartney is an English singer, songwriter, and musician best known as a member of the Beatles.",
  },
];

const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

function App() {
  const myElement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  return (
    <main className="min-h-screen bg-gray-50 p-6 space-y-10">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">
          Celebrity Cards
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {celebrities.map((celebrity) => (
            <CelebrityCard
              key={celebrity.title}
              title={celebrity.title}
              imageUrl={celebrity.imageUrl}
              description={celebrity.description}
              buttonLabel={celebrity.buttonLabel}
              buttonUrl={celebrity.buttonUrl}
            />
          ))}
        </div>
      </section>

      <hr className="border-gray-200" />

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Planets List
        </h2>
        <PlanetsList />
      </section>

      <hr className="border-gray-200" />

      <section className="max-w-4xl mx-auto space-y-4">
        <p>Hello World!</p>
        {myElement}
        <p>React is {sum} times better with JSX</p>

        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />

        <Exercise />
      </section>
    </main>
  );
}

export default App;