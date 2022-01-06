**Advanced Array Methods**   

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
**Ternaries**
Example, {conditional ? truePath : falsePath}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
The Spread Operator
The spread operator (…) will iterate through and add all values from an array like object.

book = {
    title: 'Coding',
    pages: 123,
    cover: 'hard-cover'
}
 
bookV2 = {
    ...book,
    pages: 140,
    author: 'Steve'
}

Book Version 2 will have all the same values but we changed pages to 140 and added an author property.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Mapping Arrays
When you have an array with several items that you want to break down the vest way is .map().
.map() is an array method that will go through each of the items and do a thing.
 
The nice part of .map() is that it returns a whole new array when it’s finished.
Other method such as forEach() do not create new arrays and instead just past content for the existing array.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Anatomy of .map()
The first part of a map method is a variable name that will represent each item from your array.
This variable name should be named as the singular or the array.

People > person
Books > book

let newArray = people.map((person) => {
})
 
Next you can destructure your item if you like, this is not required but does make the setup easier

let newArray = people.map ((person) => {
    const {name, age , job, shirtColor}
})
 
Lastly you need to return the react element from the map. This returns a new HTML for each item in the array.

let newArray = people.map ((person) => {
    const {name, occupation: job} = person;
    console.log(age, job);
 
    return {...person, age: 23 , job: 'yes'};
})

//////////////////////////////////////////////////////////////////////////////////////////////////////
.forEach()
forEach doesnt return an array as an output. 
You have 3 vales that you can use to work with: Value, INdex, Array.
THe last export of a forEach loop is ‘undefined’ this really messes with returning values. 
Istead you can have an coditional

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
.filter()
Filter is how you can remove certain items from your array.
It will go through each item and compare them to a conditional that you set up, true gets added and false does not.

const continents = ['Asia']

continents.filter((continent) => {
    return FilterCont.startsWith('A')
})

Expected 'Asia'

////////////////////////////////////////////////////////////////////////////////
.every()
const numbers = [-1, -2, 20, 40, 50];

console.log(
    numbers.every((num) => num < 100)
);

THis checks to make sure that every value meets the condition.

////////////////////////////////////////////////////////////////////////////////
.some()

This is very similar to every but it instead checks if anu are true instead of if all are true. 
As long as one is true this will return a true statement.

//////////////////////////////////////////////////////////////////////////////////////////
.reduce()

reduce is a method that adds to an output, it finds the accumulation of numbers. 
This does nothing for non-number values, this is very useful for creating updated numvers of items. 
LIke items in your cart or money raised by the class

///////////////////////////////////////////////////////////////////////////////////////////
.reduce parameters
cosnt array = [2, 4, 6, 8, 10]
array.reduce((total, current, index, arr) => {
    return total + current
}, 20)

reduce has a lot going on there are 5 things that you can use:
total is a variable that is automatically returned when the method ends.

current is a variable reffering to value currently being looked at. You can choose how this number will affect the total (here it is added)

lastly is the optional starting value.
this is outsode of the callback function and sets the total value and sets the total value so that you can start at any value.


128 * 8 (or 127 * 7) Needs to be an array