const str = `
test.js
coding_01.js
style.css
html.css
html.html
index.html
coding.git
something
another.png
script.js
Jimmy
12345678
.jpeg
`

const re = /(\w+)\.(js|css|png|jpeg|html)/g

let match = re.exec(str)
// console.log(match);
let fileTypes = {}

// // console.log(str.match(re));
// console.log(re.exec(str));

//Loop for executing

while (match){
    console.log(`filename: ${match[1]} Extension: ${match[2]}`);

    if(!fileTypes[match[2]]){
        fileTypes[match[2]] = 1
    }else{
        fileTypes[match[2]] ++
    }
    match = re.exec(str)
}

console.log(fileTypes);