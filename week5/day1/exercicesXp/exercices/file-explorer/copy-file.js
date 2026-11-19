const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "source.txt");
const destPath = path.join(__dirname, "destination.txt");

const content = fs.readFileSync(sourcePath, "utf8");
fs.writeFileSync(destPath, content, "utf8");

console.log("Copied source.txt to destination.txt successfully.");