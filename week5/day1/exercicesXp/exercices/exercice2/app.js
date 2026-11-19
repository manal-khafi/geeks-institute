const people = require("./data");

function printAverageAge(persons) {
  if (persons.length === 0) {
    console.log("No people in list.");
    return;
  }

  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / persons.length;
  console.log(`Average age: ${averageAge}`);
}

printAverageAge(people);