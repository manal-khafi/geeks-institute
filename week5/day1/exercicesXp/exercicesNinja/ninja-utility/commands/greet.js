async function greet(name = "Ninja") {
  const { default: chalk } = await import("chalk");
  console.log(chalk.bold.cyan(`Hello, ${name}! Welcome to Ninja Utility.`));
}

module.exports = greet;