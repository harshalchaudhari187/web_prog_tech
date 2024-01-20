const bodyParser = require("body-parser");
const express = require("express");
const routes = require("./router/routes");
const cors = require("cors");
const app = express();
//middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let corsOption = {
  origin: [/* frontend url*/ "http://localhost:3000"],
};
app.use(cors(corsOption));

app.use("/", routes);

app.listen(9090, () => {
  console.log("Server started 9090");
});

module.exports = app;
