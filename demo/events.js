const EventEmitter = require("events");
const chalk = require("chalk");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("event", data => {
  console.log(chalk.green("an event occurred!", data));
});
myEmitter.emit("event");
