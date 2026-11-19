const fs = require("fs");
const path = require("path");

const targetDir = process.argv[2]
  ? path.resolve(process.argv[2])
  : __dirname;

const files = fs.readdirSync(targetDir);

console.log(`Files in ${targetDir}:`);
files.forEach((file) => {
  console.log(file);
});