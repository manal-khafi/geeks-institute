const prompt = require("prompt-sync")({ sigint: true });
const minutesLived = require("./date");

// 1. Hardcoded birthdate
const hardcodedBirthdate = "1998-05-15";
console.log(
  `Hardcoded birthdate (${hardcodedBirthdate}): ${minutesLived(hardcodedBirthdate)} minutes lived.`
);

// 2. Bonus: Prompt user for birthdate
const userBirthdate = prompt("Enter your birthdate (YYYY-MM-DD, or press Enter to skip): ").trim();
if (userBirthdate) {
  try {
    console.log(`You have lived approximately ${minutesLived(userBirthdate)} minutes.`);
  } catch (err) {
    console.error(err.message);
  }
}