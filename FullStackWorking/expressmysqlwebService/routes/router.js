const express=require("express");
var router=express.Router();
var connection=require("../db/dbconnect");

// CREATE TABLE users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     firstName VARCHAR(255),
//     lastName VARCHAR(255),
//     address VARCHAR(255),
//     pincode VARCHAR(10)
//   );

//retrieve all products and return in json format
router.get("/users",function(req,resp){
   connection.query("select * from users order by id",(err,data,fields)=>{
   if(err){
    console.log(err);
    resp.status(500).send("no data found")
   }else{
    console.log(data);
    resp.send(data);
   }
   })

});


router.get("/users/user/:id",function(req,resp){
    connection.query("select * from users where id=?",[req.params.id],(err,data,fields)=>{
    if(err){
     console.log(err);
     resp.status(500).send("no data found")
    }else{
     console.log(data);
     resp.send(data);
    }
    })
 
 });



 //update product received via request body and update it in the database
router.put("/users/user/:id",function(req,resp){
    connection.query("update users set firstName=?,LastName=?,address=?,pincode=? where pid=?",[req.body.firstName,req.body.lastName,req.body.address,req.body.pincode,req.body.id],function(err,result){
        if(err){
            console.log(err);
            resp.status(500).send("<h3>no data updated</h3>")
           }else{
            console.log(result);
            resp.status(200).send("data updated successfully")
           }

    })

})


//add new product received via request body and add it in the database
router.post("/users/user",function(req,resp){
    connection.query("insert into users values(default,?,?,?,?)",[req.body.fname,req.body.lname,req.body.address,req.body.pincode],(err,result)=>{
        if(err){
            console.log(err);
            resp.status(500).send("no data found")
           }else{
            console.log(result);
           resp.status(200).send("data added successfully")
           }
    })
});

//delete product from the database, whose id is received via params in pnum
router.delete("/users/user/:id",function(req,resp){
    connection.query("delete from users where id=?",[req.params.id],function(err,result){
        if(err){
            console.log(err);
            resp.status(500).send("no data found")
           }else{
            console.log(result);
            resp.status(200).send("data deleted successfully")
           }

    })

});


//this is same object rotes in app.js
module.exports=router;