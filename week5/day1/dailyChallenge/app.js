const greet = require("./greeting");
const showColorfulMessage = require("./colorful-message");
const readFileData = require("./read-file");

async function main() {
  console.log(greet("Developer"));
  await showColorfulMessage("Chalk message from app.js!");
  readFileData();
}

main();