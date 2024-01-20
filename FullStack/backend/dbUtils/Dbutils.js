const sql = require("mysql");
var mysqlconnection = sql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  port: 3306,
  database: "ems",
  /*multipleSatetments:true*/
});
mysqlconnection.connect((err) => {
  if (err) {
    console.log("error occured", err);
  } else {
    console.log("connection done");
  }
});
module.exports = mysqlconnection;
