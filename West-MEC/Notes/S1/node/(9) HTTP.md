_Hypertext Transfer Protocol_

HTTP is how we send information from a browser or URL to a server.  
HTTP is the typical way that users ask for information from a server and that is called a request.

_createServer_

http.createServer() takes in a callback function with 2 parameters, 1 for requests and 1 for response.
const server = http.createServer((req, res) => {})

_Req and Res_

Req is an object represents the HTTP request, typically done through the URL but also through things like fetch().  
Res is the reponse, or what the server returns to the user to use.

_The Request Object_

There is a lot of information stored in the request object, including url, headerk, and params.  
We are going to start with the url to get the location of the page we are querying.  
if (req.url === '/') {}

_The Response Object_

The response object has a ton of information as wll, including format, json and and download.  
We are going to focus on the required one called .end thatr ends the response process.  
res.end('Welcome to our home page')  
 else {res.status(404).end()}

_Promises_

Promises are a special object that holds infomation about the about the values received but also whether or not the operation is finished.  
Promises are asynchronous os we can use them to run code and then we can force the rest of the code to wait on the promise.

Async / Await are a way that we can use promises.  
Await is a keyword telling us that we are going to wait for the promise to finish and return infomation.

Not everything has a promise on it, fetch is a promise by default but things like large math problems are not promises.  
Pormises are objects so we set them up like any other new object.

const getText = (path) +> {  
return new Promise((resolve, reject) => {})  
}

_Events_

Events are tirggereed by user input, just like js or html events like onClick().  
Node uses events very often builing modules that handle changes on the page.

In node events are built off of a singular module called the event emitter.  
This module takes in some kind of requiest and gives back something depending on the parameters.

The common events are requests and we use a method called '.on()' for that.  
Any other module that extends events is also able to use the '.on()' for exapmle the http servers.

_File System Flags_

When creating files sequenctially we need to tell node how we want the data exported, i.e. overwrite, append, create only if it doesnt exist ect.

Here are a few common ones:

- W. THis opens a file for writing (overwrites the file)
- A. This opens the file for appending (adds to file)
- R. Opens file for reading (you cant change the file)

_Streams_

You have likely heard of straming tv, movies and music to your phone or pc.    
Streaming is a technical term that means to do something sequentially.     
We only load 64 kbs of information at a time so that we can enjoy the loaded part while the rest is loading.      

_Streaming_

Streaming is a built in library in node and lets us read, write, and transfom data sequentially (little by little).     

_Streaming Options_

Just like fs options with flags, there are options wtih straming as well. The two big ones are:    

- highWaterMark. This tells the stream how many bytes should be in each chunk.   
- Encoding. This defines the language, 'utf-8' for example.     

