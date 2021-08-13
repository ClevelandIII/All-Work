// //this is the setup for map method
// //.map() accepts callback functions
// // () => {}
// let newArray = people.map((person) => {})
// //person is the variable that holds each item
// //from the peole array

//////////////////////////////////////////////////////////////////////////////////

let alc = ["Beer", "Martini", "Margarita", "Wine", "Daiquari"];

let newArray = people.map((person) => {
  const { age, drink } = person;
  if (age < 21 && alc.includes(drink)) {
    return { ...person, ejected: true };
  }

  return { ...person, ejected: false };
});

console.log(alc)

// const neededDrinks = {

// }

// people.forEach((person) => {
//     const {drink} = person
//     neededDrinks[drink] ?
//         neededDrinks[drink]++ :
//         neededDrinks[drink] = 1
// })

// console.log(neededDrinks)

// let newArray = people.map((person) => {
//   const { age, drink } = person;

//   return {
//     ...person,
//     ejected: age < 21 && alc.includes(drink),
//     //  ? true : false
//   };
// });

/////////////////////////////////////////////////////////////////////////////////