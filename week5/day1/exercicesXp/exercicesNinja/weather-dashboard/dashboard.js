const readline = require("readline");
const showWeather = require("./weather");

function startDashboard() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter a city name: ", async (city) => {
    const trimmedCity = city.trim();
    if (trimmedCity) {
      await showWeather(trimmedCity);
    } else {
      console.log("Please enter a valid city name.");
    }
    rl.close();
  });
}

module.exports = startDashboard;