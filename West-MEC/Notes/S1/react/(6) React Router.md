**React Router**

react-router-dom is not an official library that is included in the create-react-app chaintool.  
This is something that you will need to use for multi-page sites to avoid page reloading.

Technically you are able to re-render the entire site by using states.  
Routes let you create an expansive site from databases without needing to do extra programming (youll see later)  
(npm i react-router-dom)

_Imports_

_BrowserRouter as <Router>_

{BrowserRouter as Router}  
You dont have to rename the import but it is common practice and you should at least be ready to see it from others.

<Router>      
Surround your <App /> with the router tag ont he index level making it usable everywhere in the app.

_<Route path='url'>_

<Route exact path='/'>
        <Home />
    </Route>

The Route lets us define what the URL path name will say.  
In this example we use '/' for the home page 'west-mec.org'.  
And '/about' would read 'west-mec.org/about'.

_Exact Path_

React will render every link that matches the reqeusted URL on the routes.  
In order to stop this we use exact before the path to stop it from rendering all the time.  
Most important for this is home '/' bacause it matches everything.

_Error 404 page_

<Route path='*'>
        <Error />
    </Route>

Routes make it easy to check error 404 pages and design them.  
There is a catch all route that you can create an error page for.

_<switch>_

Switch is another component that you can use to allow exclusively render a path.   
This stops the need for exact and make sure the error page dosent always render.   
Make sure that you list the page form most to least specific.     

_<Link to='url'>_

Using routers means that you cant use <a/> tags.     
<a/> tags will force rerenders of your site and will reset your stte values in some cases.   
Instead we use <Link> and 'to' instead of 'href'.     