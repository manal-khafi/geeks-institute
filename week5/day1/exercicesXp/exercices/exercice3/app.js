const path = require("path");
const { readFile, writeFile } = require("./fileManager");

const helloPath = path.join(__dirname, "Hello World.txt");
const byePath = path.join(__dirname, "Bye World.txt");

const helloContent = readFile(helloPath);
console.log("Read from Hello World.txt:", helloContent);

writeFile(byePath, "Writing to the file");
console.log("Updated Bye World.txt successfully.");