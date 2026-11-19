const fs = require("fs");
const path = require("path");

function readFileContent(filePath) {
  try {
    const resolvedPath = path.resolve(filePath);
    const content = fs.readFileSync(resolvedPath, "utf8");
    console.log(`--- Content of ${resolvedPath} ---`);
    console.log(content);
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
}

module.exports = readFileContent;