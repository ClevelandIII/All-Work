const names = require('./04-names')
const num = require('./01-intro');
const { sayHi } = require('./06-module-functions');

console.log(`${names.jimmy} and ${num}. ${sayHi(names.jimmy)}`);