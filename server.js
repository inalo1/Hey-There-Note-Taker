//Require Dependicies
const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

//set middleware
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//set routes

require('./routes/routesAPI')(app);


// const routesHTML = require("./routes/routesHTML");

// app.use("/", routesHTML);

// const routesAPI = require("./routes/routesAPI");

// app.use("/api", routesAPI);

//Port listener
app.listen(PORT, () =>
    console.log(`Example app listening on port ${PORT}!`),
);