//synchronus - executes commands in order

const { readFileSync, writeFileSync } = require("fs");
console.log("start");

const first = readFileSync("./content/first.md", "utf-8");
const second = readFileSync("./content/second.md", "utf-8");

writeFileSync(
  "./content/sync-result.md",
  `Here is the result \n${first} \n${second}`,
  //options go here. flag is the only required option,
  //flag : 'a' // append - adds to the end of the document,
  //flag : 'w' // write - overwrites the document,
  {flag : 'w'}
);

console.log('finished');

console.log('next Task')
