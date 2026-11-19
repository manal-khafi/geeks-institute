async function run() {
  const { default: chalk } = await import("chalk");

  console.log(chalk.bold.green("Success! Chalk is working in CommonJS .js."));
  console.log(chalk.bgBlue.white(" INFO ") + " " + chalk.yellow("Styled output in terminal"));
}

run();