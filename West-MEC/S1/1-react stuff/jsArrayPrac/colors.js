const colors = ['red', 'black', 'white', 'blue', 'purple', 'orange', 'green', 'yellow']

// let newArray = colors.map((index) => {
//     {colors, index;}
// })

let newArray = []
let number = 0;

for(i of colors){
    newArray.push(`color: ${i}, index: ${number}`)
    number++;
}

console.log(newArray)