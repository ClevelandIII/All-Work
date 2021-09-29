const path = require("path");

const filePath = path.join(__dirname, "/content", "summary", "/test.txt");
console.log(filePath)

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__filename, 'content')
console.log(absolute);