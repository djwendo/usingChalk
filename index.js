var chalk = require("chalk");

var message = chalk.bgWhite(chalk.blue("Hello ") + chalk.magenta("World. ") + chalk.green("How are you today?"));
console.log(message);