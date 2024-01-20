//import libraries
const express = require("express");
var router = express.Router();
//getting db connection from singleton js dbConnection
var connection = require("../dbUtils/dbConnection");

//route mapping for index page
router.get("/home", function (req, resp) {
  connection.query("select * from employees", function (err, result) {
    if (err) {
      console.error("error occured", err);
      resp
        .status(500)
        .send(
          "<h2>Internal Server Error, please try again in some time!!!</h2>"
        );
    } else {
      console.log(result);
      resp.render("home", { empData: result });
      //LogicalViewName: home
      //ActualViewName: /views/home.ejs
    }
  });
});

router.get("/edit/:id", function (req, resp) {

  connection.query("select * from employees where empId=?", [req.params.id], function (err, result) {
    if (err) {
      console.error("error occured", err);
      resp
        .status(500)
        .send(
          "<h2>Internal Server Error, please try again in some time!!!1</h2>"
        );
    } else {
      console.log(result);
      resp.render("edit", { empData: result });
    }
  })
});
router.post("/update", function (req, resp) {
  debugger
  console.log(req.empId);
  connection.query("update employees set name=?,basic=?,address=? where empId=?", [req.body.name, req.body.basic, req.body.address, req.body.empId],
    function (err, result) {
      if (err) {
        console.error("error occured", err);
        resp
          .status(500)
          .send(
            "<h2>Internal Server Error, please try again in some time!!!1</h2>"
          );
      } else {
        console.log(result);
        resp.redirect("home");
        //LogicalViewName: index
        //ActualViewName: /views/home.ejs
      }
    });
});
router.get("/create", function (req, resp) {
  resp.render("create");
});
router.post("/insert", function (req, resp) {
  connection.query("insert into employees values (?,?,?,?)", [req.body.empId, req.body.name, req.body.basic, req.body.address],
    function (err, result) {
      if (err) {
        console.error("error occurred", err)
        resp.status(500).send("<h2>Internal Server Error, please try again in some time!!!1</h2>");
      } else {
        console.log(result);
        resp.redirect("/home");
      }
    });
});
module.exports = router;
