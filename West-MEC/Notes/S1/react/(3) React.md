**Unit 1 React**

//////////////////////////////////////////////////////////////////////////////////////////////////

**Intro to react**

*How to start*

Creating a react app is a large task that we can use toolchains to do for us.     
There are a lot of toolchains that serve different purposes but here are the biggest ones.   
- create react app
- next.js
- gatsby 
- parcel  

*Create react app*

Now that the CRA is installed we can use it to create a new app.   
Npx create-react-app "file name" (no caps).   
This command is run with an npx (node packet executable).   

*Intro to .JSX*

JSX stands for javascript expressions and runs perfectly fine in a .js file too.    
This language allows us to type html style code in a js format.   
The biggest advantage is allowing us to do calculations or conditional checking alongside the page rendering.   

*Using code in JSX*

The way to use code in jsx is surrounding it in curly brackets.    
This informs the code to treat everthing inside of the brakcets as regular js.    
If you want anything to render then you need to return it from the component function.   
Lastly, just like js when you return something the code stops.    

////////////////////////////////////////////////////////////////////////////////////////////////////////////

**Components**

*Intro to components*

React is written in .jsx, this is a special form of html.   
Components are differentiated from the rest of the html tags by using capitals.   
Components can be used for anything that you wnat to partition into smaller more manageble parts.   

*Creating new components*

When creating components it is best that they are named singular nouns like book, header, item or button.     
Components should also be kept in a components folder in the .src folder.     

*Parts of the components*

- Imports
Typically usestate, useeffect or other react hooks.     

- Arrow function
This is the name of the component and will also hold any props that are passed down.    

- Any states or functions
Before the return the react component you can define any js you want to use.   

- The retun statement
This will house what you want to be rendered into html.    

- Export component
This just sends off the react components to the dom renderer.    

*Importing components*

Once you have created your components you need to import them on the main app page.    
You can rename them if you like by using the 'as' keyword.    

*Using components*

When you want to use a component you type it out just like a regular html tag but you must use a capital letter.     
Capital letters let the react library know to compile the code.     
Lastly remember that you always need to close all of your react components. Ex. <Form />     

*useState*

useState stores a value and returns it to the user similar to a variable.    
Updating using setState causes a rerender of your page.     

*Setting styles*

Lastly, there are times when you need to use js to pass objects.    
When you need to its important to remember that using js requires a double bracket {{...}}.     
One of the most common instances for this is css styles and props.     