const express = require("express")
const app = express()

// Routes Imports
const people = require('./routes/people')
const auth = require('./routes/auth')

// App

app.use((express.static('../app')))
.use([express.urlencoded({extended: false}), express.json()])

// Routes
.use("/api/people", people)
.use("/login", auth)

// .use("/api/v1", v1Api)
// .use("/api/v2", v2Api)


.listen(3000, () => console.log(`server listening at port 3000`)) 

