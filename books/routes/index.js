var express = require("express");
var router = express.Router();
var conn = require("../utils/Dbutils");

/* GET home page. */
router.get("/", function (req, res) {
  conn.query("select * from employees", (err, data) => {
    if (err) {
      res.json("Internal Server error");
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

module.exports = router;
