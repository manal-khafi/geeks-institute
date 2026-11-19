const greet = require("./greeting");
const showColorfulMessage = require("./colorful-message");
const readFileData = require("./read-file");

async function runChallenge(userName = "Ninja") {
  console.log("=== Greeting ===");
  console.log(greet(userName));

  console.log("\n=== Colorful Message ===");
  await showColorfulMessage(`Leveling up with Node.js, ${userName}!`);

  console.log("\n=== File Content ===");
  readFileData();
}

runChallenge("Samira");