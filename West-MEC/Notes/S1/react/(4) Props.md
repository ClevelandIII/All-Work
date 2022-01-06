**Introduction to Props**

Props (short for properties) are any setting or value that is attached to a component.  
These are most used to pass values down the line but can also be used just like HTML element properties.

_Props_

You can give these props any name and any value.  
The better you name it the more useful it will be.

_Destructuring Props_

IF you have a lot of information you can destructure you props to save you some space.

<Question
key={data.id}
{...data}
/>

const Question = ({title, info}) => {}

_Mapping Arrays_

{questions.map((question) =>{
return(
<Question key={question.id} {...question}>
);
})}

In this example we have several items in the questions state and we can loop through all of them, returning a <Question/> component for each one.

_Anatomy of .map()_

You can destructure your item if you like, this is not required but does make the setup easier.

const Lists = ({ people }) => {
return people.map((person) => {
const { id, name, age, image } = person;
return (

<article key={id} className="lists">
<img src={image} alt={name} />
<div>
<h4>{name}</h4>
<p>{age}</p>
</div>
</article>
);
});
};

_Using Props_

Using props once they are passed down is as simple as adding the name of the prop to the component parameters.  
We can use {...} to immidieately deconstruct it for use in the component.

Now that we have accepted these props we are able to use them as variables.  
This is especially important when we are mapping and using the same variables for several different values.

**Hooks**

_Introduction to hooks_

React is only re-rendered when told to, in react 16.7 and older you had to write these functions by hand.  
Since react 16.8 there are built in hooks that you can use without creating your own functions.

_what is a hook_

Hooks are just special functions taht are built into react that let you kook into the react features.
Every hook in react must strar with a lowercase 'use'.

- useState
- useEffect
- useContext

_useEffect p1_

useEffect() is a function that will run anytime a rerender happens.  
This is especialy helpful when pulling data from a server and we want to make sure that the data is up to date on render.

useEffect(() => {
effect
return() => {
cleanup
}
}, [input])

_useEffect p2_

useEffect runs a certain chunk of code every rerender, most often that chunk is a function.  
The effect to the right is the js code that runs when you rerender.

_useEffect p3_

The effect that is created is permanant and will stack over and over.
We can use a cleanup funciton that removes any left behind events.
NOTE: This is not required for every effect, only use when needed (usually events)

_useEffect p4_

The input array can be used to choose specific state changes that will cause this effect instead of every render.
You can also leave it empty to have the effect happen only once.
