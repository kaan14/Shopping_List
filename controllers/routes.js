


var express = require("express"); 

var list_DB = require("../models/list.js"); 


// look up for express.Router???
var router = express.Router(); 

var listDB = require("../models/list.js"); 

var item = ["ev", "araba", "agac"]; 

router.get("/mylist", function(req, res){

    res.render("index", {willBuy: item}); 

}); 



router.post("/api/newitem", function(req, res){


}); 


router.put("/api/list/:id",function(req, res){


}); 


router.delete("/api/list/:id", function(req, res){

}); 




module.exports = router; 











