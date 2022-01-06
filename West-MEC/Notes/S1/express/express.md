**Express**

_Servers_

Servers are computers, I know they sound more advanced and technical, but they are a computer just like your laptop.  
The only difference is that a sever is meant to stay on and always have the resources they are carrying available.  
//Computers can do the same but they get incredibly slow

_HTTP Request Cycle_

Urls are an address gto the server where the information is stored.  
Think of it like a house and you need to send a letter to ask for something, you cant do that without knowing the adress.

The url holds a lot of information, where to go and what to ask for.  
The server waits for this HTTP request nd then HTTP responds with the corresponding data if availible.

_Request Messages_

A request message has 4 parts:

- A method. These are GET, PUT, POST and DELETE

- A URL. This is the address to go to.

- Headers. These are the options that your request carries

- Body. This is any other relevant information needed

_Request Methods_

- Get. Reads Data

- Post. Creates Data

- Put. Updates Data

- Delete. Deletes Data
  //know analogy C.R.U.D for the sequence and this will be on the test

_Headers (optional)_

Headers are an object that is filled with key value pairs describing the request. For example:

- CORS: no-cors

- Referrer: google.com/

- Pragma: no-catch

_Body or Payload (optional)_

This is the content that you are depositing on to the server if you are runnign a PUT or POST request.  
This is totally optional and the user cant do this with a url request, you would need to set up this command using a form or something.

_Response Messages_

THis is very similar to the requeset message.

- Status code. 200, 404, etc. tells the user the status.

- Status text. Describes the code, OK or Page not found.

- HEaders. Details about the data and server.

- Body. The content they want, HTML, JSON etc.

_Server Status Codes_

100's - Information

- This is a preliminary response, typically used to let the client know that their request was received and to wait.

200's - Success

- THis is a success, there are a lot of codes in the 200s but all of them are just diffenet types of sucesses.

300's - Redirect

- These are redirection, this it typically placed in the console for the dev to handle deprecations. FOr example 301 is moved permanently and the dev displays the new URL.

400's - Client Errors

- This is used when the error seems to be caused by the client and not the server.

500's - Server Errors

- These are reserved for when something goes wrong in the server's code, infinite loops, missing methods, etc.

_MIME Types_

Mime types tell the browser how to encode the information that it is responding with.  
SOme well known ones are txt, JSON, css, html. Look them up in MDN for more.

_API vs SSR_

There are 2 main things that you cna do with a server.  
You can set up an API with json data or you can set up a website using server side rendering.

_API_

APIs are very esasy to return to the client in a response using the res.json().  
This is used to send data and store data.

_SSR_

This is also easily served using res.render().  
This is used to serve templates of the page from the server.

_Express JSON_

When serving a JSON file you need to encode the text to be aplication/json.  
Express responses have a method for this too, res.json().

_req.params_

Url routes can include a : to represent a unique param and we can use that form the req object.  
test/users/:id => test/users/1234

- if we check req.params we recieve {id: 1234}

//res.send is equal to node's res.end

_res.query_

For more complicated searches yoy can use query, you can add any or all query params to this.  
test/api/query => test/api/query?id=123

- req.query returns an object with property id {id: 123}

_Middleware_

MIddleware is a function or method that runs between the request and the response.  
Express is a middleware for node and most things in express are middleware as well.

THe basic layout for middleware is:

- Request => middleware => response

Most middleware is done with functions/methods

We are going to create our own middleware but there is a key component.  
When you work with middleware youy must pass it on to the next middleware manually or exit/terminate the code.

Terminating vs Passing

Terminating the respnse is as easy as ending the response, res.send(), res.json(), etc....  
Passing uses a built-in medthod called next().

_morgan npm_

Morgan is a very robust logger that you can use for middleware.  
Use the value 'tiny' for the smallest log availible, or dev if you want the coloring.  
There is also default for a lot of info and combined for even more.

_Method POST_

Post is a method that allows us to create new data, that data is passed through the body of the request.  
THis is extremely similar to the get with a req and a res, it is even able to return an HTML.

_express.urlencoded_

INformation passed through the body of a request is a bit confusing for the server.  
Datat must be parsed by content type and sometimes that isnt clearly defined.

Express has released its own version of body-parser (an old library to handle encoding) called urlencoded.  
THis middleware will take the req.body and decoded the values to be strings or arrays.  
~~DOES NOT RECOGNIZE OBJECTS~~

_express.json_

This is the complimentary middleware to urlencoded that does recognize objects.  
This will also parse the data into a JSON for easy use in the response.

_urlencoded() and json()_

These two middlewares are required for put and post methods since the data is always passed to the server as encoded information.

_PUT method_

Put is used to update exsisting values.  
Put methods require 2 parameters, what you want to change and what it will be changed to.

_Delete method_

Delete removes a value from your data.  
All we need is a param to let us know which object we want to remove from the database.

_Postman_

Postman is a program that you can install onto your computer to run api requests to check how the server is runnign.  
THis saves a lot of time during development and allows you to check the API without creting an await/ async to test out the server.  
need double quotes for json

_Express Router_

Express router is used to reduce the amount of routes that yoy need to type into your main server file.  
You instead create your routes wwith your mulitple methods in one file and then app.use that router file.

_express.Router()_

Instead of creating an app we can create a router in the same way allowing us to create the pathing in a different file.  
const router = express.Router()  
Router is a class which is why it is uppercase

_router.method()_

When using routers tou creare them just like the app using the .methods(path, CB).  
router.get('/', (req, res) => {})       

_Using a Router_

Once you have created your routes you need to export it from the router and import it ot the server file.      
Then you app.use the route with the path.      
app.use('/api/people', people)      

_Controllers_

Controllers are created to deal with functions and are then passed to the router.      
THis is the final step in creating clean, easy to navigate code for a server.     

Since the controller will handle the req, res callback funtion we can now nicely arrange our routes into easy to read methods.    