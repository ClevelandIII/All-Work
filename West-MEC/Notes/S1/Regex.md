**Regex**

_Regex 101_

Regex is a special shorthand to allow devs to search trhough strings.     
It was developed to quickly define search patterns.     

_Creating a Regular Expression_

Anything inside of double forward slass // is a regular expression.     
const re = /testing/     
// re means regular expression
// as long as the word is there, it will find it. If the word is testing it will return true, if the word is testinggggg it will also return true     
ABove is a regex that will match the string 'testing'       

_Using Regex_

Once you have created a regex there are a few methods that you can use for testing.      

- str.replace(regex, 'replacer')
  - Returns a new string with the replaced value.    

- str.match(regex, (match) = {return new})
 - Returns an array of the first match that is found in the str.
// essencially returns all the times the word is found

- regex.test(str)
 - Returns true or false if the regex is found in the string.     

- regex.exec(str)
 - Returns n arrray with a bunch of useful information, stops after the first match but can be loooped to check the rest.    

_Single vs Global_

All of the following methods will onlu work on the first instance that matches in the string.     
We can manually extend this to cover evey match by adding 'g' to the end of the regex.     
// the regex is the re = /testing/ thing, not the str. thing
// it is added like this: /testing/g

_Character Set_

Anything inside of square brackets "[]" is called a character set, these match anything inside of them and they can have '-' for a range of characters.          
const re = /[a-zA-Z]/       
Above matches all letters capital and lowercase      
// to add dots do \. and to add parenthesis you add \( \)

Each instance of square brakets counts as a new letter.    
const re = /[A-Z][a-z]/    
Above will find capitals and the lowercase letter that follows it.     

_Qualifiers_

There are extras that yoy can add to any character or character set to modify the search.    

- ^
 - Added before a character set means not. Goes inside the brackets    

- * 
 - Added after a characeter set means 0 or more. Goes outside the brackets    

- +
 - Added after a character set means 1 or more. Goes outside the brackets

- |
 - Acts like an or between values, required when needed to check multiple characters.   

- ?
 - Makes any character before it optional {min#, max#} {min#,} {exact#}
 - Added after will add a quantity     

_Character Classes_

Char classes look for a type of char

- \w or \W (not)
 - This is a word or any ascii character, number and underscores same as /[a-zA-Z0-9_]/

- \d or \D (not)
 - This is any didgit same as /[0-9]/

- \s or \S (not)
 - Matches any white space : space, tab, breaks  

//the not means it doesnt match/ mean the thing it would otherwise
//thses are imput like \d over something like [0-9], so again [0-9] could be replaced with just \d

- .
 - Matches everything except breaks

_Capture Groups_

This is a built in tool to grab certain balues and return them.      
Anything placed in parenthesis will be returned when using .exec()    
// like const re = /\w+\.(js|css)/g 

_Boundaries_

- ^ at the start of the regex
  - signifies the start of the string

- $ at the end of the regex
 - signifies the end of the string

- \b
 - word boundary place in the front ot state the statrt of a word and at the end to state the end of a word


