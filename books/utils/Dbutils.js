const mysql = require("mysql");
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ems",
});
conn.connect((err, res) => {
  if (err) {
    console.log("Mysql error", err);
  } else {
    console.log("Connected to Mysql");
  }
});
module.exports = conn;
