const axios = require("axios");

async function showWeather(city) {
  const { default: chalk } = await import("chalk");

  try {
    const geoRes = await axios.get("https://geocoding-api.open-meteo.com/v1/search", {
      params: { name: city, count: 1 },
    });

    if (!geoRes.data.results || geoRes.data.results.length === 0) {
      console.log(chalk.red(`City "${city}" not found.`));
      return;
    }

    const location = geoRes.data.results[0];
    const weatherRes = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: location.latitude,
        longitude: location.longitude,
        current_weather: true,
      },
    });

    const current = weatherRes.data.current_weather;
    console.log("\n" + chalk.bold.bgBlue.white(` Weather in ${location.name}, ${location.country} `));
    console.log(chalk.yellow(`Temperature: ${current.temperature}°C`));
    console.log(chalk.cyan(`Wind Speed: ${current.windspeed} km/h`));
    console.log(chalk.green(`Weather Code: ${current.weathercode}\n`));
  } catch (error) {
    console.error(chalk.red("Failed to fetch weather:"), error.message);
  }
}

module.exports = showWeather;