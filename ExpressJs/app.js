//import the libraries
const express = require("express");
var app = express();

const bodyParser = require("body-parser");
var routes = require("./routes/router");
const path = require("path");
//Configure the application
app.set("views", path.join(__dirname, "views")); //prefix of every render page will be views/
app.set("view engine", "ejs"); //suffix of every render page will be ejs

//Optional--we can declare here our static pages which will be in /public folder
// app.set(express.static(path.join(__dirname, "public")));
// app.use("/css", express.static(path.join(__dirname, "public/css")));
// app.use("/js", express.static(path.join(__dirname, "public/js")));

//Define Middlewares- //All the upcoming url first Goes from this then go for next middleware or route handler
//urlencoded()--if method get, an object created name 'query'
//if method post, an object created name 'body'
app.use(bodyParser.urlencoded({ extended: false }));

//define route handler
app.use("/", routes);

//start the server
app.listen(9090, function () {
  console.log("Server started at 9090 port");
});

//Export the 'app' object to use it outside the world
module.exports = app;
