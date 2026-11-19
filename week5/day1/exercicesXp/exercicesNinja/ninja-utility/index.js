const { Command } = require("commander");
const greet = require("./commands/greet");
const fetchData = require("./commands/fetch");
const readFileContent = require("./commands/read");

const program = new Command();

program
  .name("ninja-utility")
  .description("CLI utility with greet, fetch, and read commands")
  .version("1.0.0");

program
  .command("greet")
  .description("Display a colorful greeting message")
  .option("-n, --name <name>", "Name to greet", "Ninja")
  .action(async (options) => {
    await greet(options.name);
  });

program
  .command("fetch")
  .description("Fetch data from a public API URL")
  .option("-u, --url <url>", "Target URL", "https://jsonplaceholder.typicode.com/posts/1")
  .action(async (options) => {
    await fetchData(options.url);
  });

program
  .command("read <filePath>")
  .description("Read and print a file's content")
  .action((filePath) => {
    readFileContent(filePath);
  });

program.parse();