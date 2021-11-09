const re = /(Mr|Mrs|Ms|Dr|Er)\. [A-Z][a-z]*/g;

const str = `
Mr. E
Dr. Reese
Mrs. west
t879rfp4io4
`

console.log(str.match(re));

//use node

// const fs = require('fs')
//const input = fs.readFileSync('./jenkins.txt', 'utf8)
//something like that