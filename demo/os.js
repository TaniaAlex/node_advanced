const os = require("os");
const chalk = require("chalk");

console.log(chalk.green("Operation System: ", os.platform));
console.log(chalk.blue("the operating system CPU architecture: ", os.arch));
console.log(chalk.redBright("Info about each logical CPU core: ", os.cpus));
console.log(chalk.red("Free memory: ", os.freemem));
console.log(chalk.red("Total memory: ", os.totalmem));
console.log(chalk.magenta("Home Dir: ", os.homedir));
console.log(chalk.blueBright("Up Time: ", os.uptime));
