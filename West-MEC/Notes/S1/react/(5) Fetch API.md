**Async/Await Functions**

JS will compile code as fast as possible so there are times when it needs to slow down and wait for data.  
To force it to slow doen we use async/await functions.  
The rest of the code will wait for these functions to finish and return data.

const fetchTours = async() => {
const response = await fetch(url)
const tours = await response.json()
setTours(tours)
console.log(tours);
};

We start by calling he function an async function.  
Then we use await on any parts of the code that we need to wait for.

_fetch()_

fetch() is a built in JS method that reaches out to a URL and grabs a response.  
The response is an object with several parts but the most important ones are...

- The json with data
- The response code 200

_Response code 200_

The code 200 means that it reached out to the sever and was allowed to access the informatin there, other codes will be talked about next unit

_JSON Data_

The json is not available in the responce object, only the fact that it is available to fetch.  
Once we know that it is availible we use the responce object to take the data.

_Using the data_

Once you have the data make sure you save it somewhere in a state or the data will disappear.

_useEffect {fetch}_

We are going to want to run that fetch function often but not forever.       
That is what useEffect is made for.      