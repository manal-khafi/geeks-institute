async function showColorfulMessage(message = "Keep coding and building awesome things!") {
  const { default: chalk } = await import("chalk");
  console.log(chalk.bold.magenta(message));
}

module.exports = showColorfulMessage;