const path = require("path");
const fs = require("fs");

function getFileInfo() {
  const filePath = path.join(__dirname, "data", "example.txt");
  const exists = fs.existsSync(filePath);
  console.log(`Exists: ${exists}`);

  if (exists) {
    const stats = fs.statSync(filePath);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Created At: ${stats.birthtime}`);
  }
}

module.exports = getFileInfo;