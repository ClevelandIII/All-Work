_What is NodeJS_

Node is an enviroment that allows us to run JS outside of the browser.  
Built using chrome's V8 JS engine.  
Node has a large and great community that is adding to the libraries availible.

_Differences from Browser to Node_

- There is no DOM (dom call error out)
- There is no Window
- This runs server side apps
- Great for filesystem (accessing the computer not justs the browser)
- Versioning (the verison is static so there is no chance of breaking with future updates)
- They use commonJS so we dont need to worry about ES6 or browser compatibility

_Installing Node_

Make sure you install the LTS because it stands for the long term version and it will be guarenteed to work for a while.

_REPL & CLI_

REPL (Read Eval Print Loop) is a terminal command that lets us use Node  
CLI (Command Line Interface) is the better way that we can use Node

_Starting REPL_

To start up Node all you need to do is (node) and then enter. to exit use ctrl + c twice.

_CLI_

This is the verison that runs js files and compiles them for the terminal.  
If you type in `node filename.js` the file will be compiled an run without the need for a browser engine.

_Globals_

Just like JS, there are several global variables thatwe are able to use anywhere.  
For instance `console` we don't need ot define this, node already knows.  
We callthese Globals.

here are a few globals that you should know.

- \__dirname (two underscores (_), ignore the \ from formatting). These are a path ot the current directory.
- \__filename (two underscores (_), ignore the \ from formatting). This is the current file name.
- require. This allows us to use modules.
- module. This is the info about the current module.
- process. This is the info about the env where the program is being executed.

_Modules_

Modules are Node's way of saying files, EVERY .JS FILE IS A MODULE.  
We can use these in ES6 but we use the import command.  
Node uses `require` instead of import.

_Build-in Modules_

There are a lot of built in modules that are useful for different programs.  
We are going to be using 4 main ones but you can find more in the docs if you want ot make your own projects.

_OS Module_

The OS module is used to return information on the computer and system information of the PC.  
const os = require('os')

_Path Module_

The Path module is used for navigation the directories and file paths.  
This also includes methods that will clean up paths to avoid errors.  
const path = require('path')

_FS Module (file system)_

The file system module is extensive and allows interation between your code and the files on the PC.  
This has methods to allow reading, wwriting, cleaning, and combining files (and so much more...)  
Because it is so extensive we only import what we need.  
const {readFileSync, writeFileSync} = require('fs')

info about write file sync flag option  
writeFileSync(  
"./content/sync-result.md",  
`Here is the result \n${first} \n${second}`,  
//options go here. flag is the only required option,  
//flag : 'a' // append - adds to the end of the document,  
//flag : 'w' // write - overwrites the document,  
{flag : 'w'}  
);

_HTTP Module_

HTTP is all about severs and internet protocol.  
This library truncates a lot of difficult code into simpler methods and never buffers requests or response, allowing users to stream data.  
const http = require('http')

_Nodemon_

Nodemon is a dev dependancy that we use to help with node sever development.  
If you ever update any files on a sever then you need to stop and restart the server to load those settings.  
Nodemon lets us do it automatically.

_devDependencies_

Nodemon is a library that is not needed for the end user so loading it one the server would wast space for no reason.  
So install some thing in a dev only space we use devDependencies.  
npm i nodemon -D

_NPM Scripts_

If you look into your package.json you wll also see a 'scripts' object.  
We have been using this in react without even knowing it you may recognize the commands listed.

_Custom Sripts_

Reacyt builds default scripts that we have been using but you arae able to define youy own scripts.

_Event Loop_

- What are the 2 stacks inside of the javascript run time? Call stack and a heap

- What does it mean when you say “javascript is a single threaded programming language”? One thread : one call stack : one thing at a time

- Since js is a single threaded programming language what handles the async functions? Web APIs

- Describe blocking in your own words. Slow code

- List 1 asynchronous callback: setTimeout

- Describe what the event loop does in your own words. The loop takes the first thing from the task queue and pushes it if the stack is empty

- What is the task queue? Where the callbacks go when they are ready to be processed

- When does the event loop trigger to pull the next item from the task queue? When the stack is empty

- Rank the following in highest to lowest priority relative to the event loop. Call Stack then Render Queue then Callback Queue

_What is async_

As we saw there are some functions that run outside of the call stack in a browser API stack.  
Any code that is running/ operating outside of the call stack is called asynchronous.  
We can force functions to be async, allowing our code to keep runnign without waithing for the funcion to finish.

_Node Event Loop_

Node recreated this event lop process for their own library.  
This allows node to handle several requests at the smae time without running into delays or blockages.
