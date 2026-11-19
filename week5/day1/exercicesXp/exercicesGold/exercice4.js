const { faker } = require("@faker-js/faker");
const prompt = require("prompt-sync")({ sigint: true });

const users = [];

function addFakeUser() {
  const user = {
    name: faker.person.fullName(),
    street: faker.location.streetAddress(),
    country: faker.location.country(),
  };
  users.push(user);
}

function addUserFromPrompt() {
  const name = prompt("Enter your full name: ");
  const street = prompt("Enter your street address: ");
  const country = prompt("Enter your country: ");

  users.push({ name, street, country });
}

addFakeUser();
addUserFromPrompt();
console.log(users);