// let neededDrinks = {
//     Soda: 0,
//     Coffee: 0,
//     Lemonade: 0,
//     IcedTea: 0,
//     Juice: 0,
//     Milkshake: 0,
//     Water: 0,
//     Milk: 0,
//     Beer: 0,
//     Martini: 0,
//     Margarita: 0,
//     Wine: 0,
//     Daiquari: 0
// }

// let newArray = people.map((person) => {
//   const { drink } = person;
//   const { Soda } = neededDrinks;
//   let suds = 0;

//   if (drink == 'Soda') {
//     suds++
//   }

//   (`${key}: ${value}`)
//   return {Soda};
// });

// console.log(neededDrinks)

const neededDrinks = {

}

people.forEach((person) => {
    const {drink} = person
    neededDrinks[drink] ?
        neededDrinks[drink]++ :
        neededDrinks[drink] = 1
})

console.log(neededDrinks)