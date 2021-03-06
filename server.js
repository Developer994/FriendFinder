// Dependencies
// =============================================================
var bodyParser = require('body-parser')
var express = require("express");
var path = require("path");

// Set up the express app
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Here, we include the html route in the server file
// and the app ((app)) that we are passing in is the express. 
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function () {
    console.log(`App is listening on PORT: ${PORT}`)
})



