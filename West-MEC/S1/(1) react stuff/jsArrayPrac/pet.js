const pets = ["snake", "dog", "cat", "fish", "lizard", "bird", "rabbit"];

peta = pets.map((pet) => {
    return pet[0].toUpperCase() + pet.slice(1)
})

console.log(peta)