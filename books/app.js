var express = require("express");
var bodyparser = require("body-parser");
var indexRouter = require("./routes/index");
var app = express();
var cors = require("cors");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/", indexRouter);
let corsOption = {
  origin: "localhost:3000",
};
app.use(cors(corsOption));
app.listen(9090, () => {
  console.log("Server is running on port 9090");
});
module.exports = app;
