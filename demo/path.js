const path = require("path");
const chalk = require("chalk");

console.log(chalk.green("Name of the file: ", path.basename(__filename)));
console.log(chalk.blue("Name of the directory: ", path.dirname(__dirname)));
console.log(chalk.yellow("File extention: ", path.extname(__filename)));
console.log(chalk.magenta("Parse: ", path.parse(__filename).base));
