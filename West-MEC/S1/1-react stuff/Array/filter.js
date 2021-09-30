// // const kaine = []

// // people.filter((person) => {
// //     const {name} = person;
// //     return kaine.startsWith('Kaine')
// // })

// // console.log(people)

// ///////////////////////////////////////////////////////////////////////////MY WAY

// let kaines = people.filter((person) => {
//     const {name} = person;
//     return name.split(" ")[0] === "Kaine"
//     //return name.startsWith("Kaine")
//     //return name.includes("Kaine ")
// })

// console.log(kaines)

// ////////////////////////////////////////////////////////////////////////////Mr. PECK

// //console.log(
// //     people.filter((person) => person.name.startsWith("Kaine"))
// // )

// ////////////////////////////////////////////////////////////////////////////////////////EFFICIENT

// let fish = people.filter((person) => {
//     const {pet} = person;
//     return pet.split(" ")[0] === "fish"
// })

// console.log(fish)

// let lizard = people.filter((person) => {
//     const {pet} = person;
//     return pet.split(" ")[0] === "lizard"
// })

// console.log(lizard)

// let bird = people.filter((person) => {
//     const {pet} = person;
//     return pet.split(" ")[0] === "bird"
// })

// console.log(bird)

// let hamster = people.filter((person) => {
//     const {pet} = person;
//     return pet.split(" ")[0] === "hamster"
// })

// console.log(hamster)

//////////////////////////////////////////////////////////////////////////////////////////works without some

// console.log(
//     people.some((person) => {
//         const {pet} = person
//         return pet === 'hamster'
//     }),
//     people.some((person) => {
//         const {pet} = person
//         return pet === 'bird'
//     }),
//     people.some((person) => {
//         const {pet} = person
//         return pet === 'fish'
//     }),
//     people.some((person) => {
//         const {pet} = person
//         return pet === 'lizard'
//     }),

// )

// console.log(
//     people.every((person) => {
//         const {age} = person
//         return age > 9 && age < 26
//     }),
//     people.every((person) => {
//         const {age} = person
//         return age > 14 && age < 31
//     }),
//     people.every((person) => {
//         const {age} = person
//         return age > 19 && age < 36
//     }),
// )

////////////////////////////////////////////////////////////////////////////////////

// people.reduce((total, person) => {
//     const {age} = person
//     return total + age
// }, 0)/1000

console.log(people.reduce((total, person) => total + person.age, 0)/1000);