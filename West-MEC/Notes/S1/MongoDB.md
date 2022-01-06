_MongoDB 101_

Mongo is a non-relational database.  
THere are pros and cons to all the different types of databases but the biggest for us is the use of JSONs.

_MongoDB 102_

Instead of tables we have collections which are big datasets.  
Instead of rows we have documents which are accessed using key value parirs like a normal JSON.

//if you were creating a library DB, the CLUSTER would be named library, the COLLECTION would be named books and DOCUMENTS would be the individual book

_Hosting_

MongoDB can be hosted from a local machine if you want but there is a free alternative named "atlas".  
Atlas is created by the same team that created mongoDB.

_Allowing Users_

Once teh database is up and running then you need to whitelist users.  
One the left you will see a tab named Database Access, click it and then add a new database user.

//Make sure you save the user's password cause it will never come back

_Network Access_

You can choose to add only your IP address but we are going to allow access from anywhere and pres sconform.

_Mongoose_

Mongoose is an alternative to the mongoDB api and is used more often for its conveinence.  
Mongoose has a bult in object modeling api that ensures that all posted documents are exactly the same.

///Mongoose gets updated regularlly so make sure to read the documentation

_dotenv_

Another library, this one loads the .env file that we create.  
You want to require the dotenv earlt on in oreder to give your hiddend codes to the entire program.  
Use .config() to initialize them right awat.  
//it is spelled out as dotenv and not literally .env

require('dotenv').config()

_Schema_

Schema is a built in method using mongoose that we build to make sure every document siecactly the same.  
To define a schema we need to predefine the name and the data type.  
This should all go into a models folder.

_Schema code_

new mongoose.schema ({})

- THis defines a schema object that declares the document variables.

mongoose.model (var, schema)

- Assigns the schema to a variable that we can use in the server.

_Some important options_

Schema lets us define optional parameters for our data here are some of the best.

- Type.

  - THis lets you define the data type.

- Required

  - THis amrks that dataa as required.

- Trim

  - THis removes white space.

- Default
  - If the value is not included in the posst is will ve added with this default value.

//mongoose has a built in query language, one helpful thing is model.find

_Model.find()_

Find is similar ot filter in js and will return all of the code that matches the query.     
For instantce: Model.find({completed: true})
Will return all of the documents that have been completed.     

//Schema only passes through what it wants (what you want it to pass)