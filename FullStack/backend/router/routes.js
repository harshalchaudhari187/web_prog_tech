const express = require("express");
const router = express.Router();
const conn = require("../dbUtils/Dbutils");

//To fetch the data from DB
router.get("/home", (req, resp) => {
  conn.query("select * from employees", (err, data) => {
    if (err) {
      resp.status(500).send("Internal Server error", err);
    } else {
      console.log(data);
      var str = "";
      data.forEach((element) => {
        str += JSON.stringify(element);
      });
      console.log(str);
      resp.json(str);
    }
  });
});

module.exports = router;
