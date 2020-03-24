// file system
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

// fs.mkdir(path.join(__dirname, "test"), err => {
//   if (err) {
//     throw err;
//     // Error will be thrown, if you try to create the same dir one more time;Error: EEXIST: file already exists, mkdir '/Users/user/Documents/node_tutorial/demo/test'

//   }
//   console.log(chalk.green("Directory was crated"));
// });

const filePath = path.join(__dirname, "test", "text.txt");

// // Method write File
// fs.writeFile(filePath, "Test NodeJS and Modul fs", err => {
//   if (err) {
//     throw err;
//   }
//   console.log(chalk.green("File was crated"));
// });

// // Method append File
// fs.appendFile(
//   filePath,
//   "Method appendFile will modify existing file so you can add more content",
//   err => {
//     if (err) {
//       throw err;
//     }
//     console.log(chalk.yellow("File was modified"));
//   }
// );

// // Method read File
fs.readFile(filePath, (err, content) => {
  if (err) {
    throw err;
  }
  console.log(chalk.blue("Content: ", content));
});
