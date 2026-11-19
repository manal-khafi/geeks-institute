const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isValidFullName(fullName) {
  const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
  return regex.test(fullName);
}

rl.question("Enter your full name (e.g., John Doe): ", (answer) => {
  if (isValidFullName(answer.trim())) {
    console.log("Valid full name.");
  } else {
    console.log("Invalid full name. Use only letters, one space, and capitalize the first letter of each name.");
  }
  rl.close();
});