_useRef_

The hook useRef creates references to other values.  
There are 2 big differences between useRef and useState.

- useRef does not trigger re-renders
- useRef can be used to access DOM elements

_No Re-Render_

Variables also dont trigger rerenders but useRef does not lose its balue when a rerender happens.  
THis is useful for small changes like counting clicks or logging errors.  
Rerendering can slow down the site a lot if done too often.

_Accessing DOM elements_

DOM elements are things like <div> or <input>  
By using a ref property we are able to easily change things about the element using a ref    

<input placeholder="hello">     

_useReducer_

useReducer is antothr hook that is availible with React that allows you to stote a bunch of functions/methods in 1, or more files.

REducer has 2 parameters

- State. This is a state that is declared at the start that holds all your information.
- Dispatch. THis is a word or phrase that use to tell the reducer what to do. ie 'Remove'

_Importing useReducer_

1. We import useReducer from React
2. Import the reducer function from the .js file
3. Create a default state
4. Then create the useReducer hook in the component function

_Dispatch_

The dispatch function in your app will take an object filled with different values and pass them on to the reducer.js.

- type: is the command you want to run
- ad: is the relevant information that you will need to complete the function

_Reducer.js_

reducer.js is a file that you use to hold all of the switch cases that run using your reducer  
reduce.js will have many different ifs to handle al the types of

export const reducer = (state, action) => {
if (action.type === 'ADD ITEM'){
const newPeople = [...state.peole, action.payload]
return{
...state,
people: newPeople
}
}
}

_useContext_

useContext is a hook that allows us to create global states, functions, and variables.  
Context allows us to skip prop drilling and keep all the functonal pieces of our code seperate behind in a single file.

_Context 101_

Context is strange compared to the other hooks since this is used on the index level.  
For the entire program to read and write to this data it needs to be provided to the entire app with a wrapper element.

_context.js_

The context is storing data in 1 or more seperate files.

- if there is only 1 file then we should call it context.js.
- This file builds the context hook and exports it to the index level.

_Importing context_

Import context from react the same as the other hooks.  
Creating your context is not useContext, Notice the React.createContext()

import React, {useContext} from 'react';
const AppContext = React.createContext();

_AppProvider Function_

This App Provider Function is the function that you use to create and return all of the values that you want availible to the entire program.  
The parameters for this function are always {children}, meaning everything in the app.

_Return AppCOntext.Provider_

return{
    <AppContext.Provider value={{isLoading, error}}>
    {children}
    </AppContext.Provider>
}

You put all the states and stuff in here but the return is the magic.    
The value property is how you pass the states and functions onto the rest of the App.    

All together

import React, {useContext} from 'react';
const AppContext = React.createContext();

return{
    <AppContext.Provider value={{isLoading, error}}>
    {children}
    </AppContext.Provider>
}

_Exporting_

Exporting the context requires 2 jdifferent exports.   
- The newly created react hook Usually called something related to the context i.e. useGlobalContext or useApp Context
- The AppContext and AppProvider export    

export const useGlobalContext = () => {
    return useContext (AppContext)
}

_Custom Hooks_

You can create your own hooks (functions that use states) by creating them in a different file and exporting them.     

_useFetch_

There are a few uses for this but consider making these for anything that you can and will use over and over or in multiple programs.   
useFetch is an extremely common function since we are commonly using API fetch requests.      