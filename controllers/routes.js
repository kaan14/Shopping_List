


var express = require("express");

var list_DB = require("../models/list.js");


// look up for express.Router???
var router = express.Router();

/*=============GET========================================= */
router.get("/mylist", function (req, res) {
    list_DB.all(function(data){
  
        var completedItem = []; 
        var incompletedItem = []; 

        //console.log(data); 
        for (let i = 0; i < data.length; i++){
            if (data[i].completed == 1){

                completedItem.push(data[i]).item; 
                console.log("completed" + completedItem)
            }
            else{
                

            incompletedItem.push(data[i]).item;
            console.log("incompleted" + incompletedItem);
            }
        }

        // create an object for handlebar
        var listObj = {
            willBuy: incompletedItem, 
            done: completedItem,
        }
        //send listObj to handlebar to prosess and writes the item on the lists
        res.render("index", listObj);
    })
    
});




/*=============POST========================================= */

router.post("/api/newTask", function(req, res){
    console.log(req.body.item);
    list_DB.create("item",req.body.item, function(data){
// console.log(("../models/list.js").all);
        res.json({id: data.InsertID}); 
    }); 
}); 

/*=============Put========================================= */
router.put("/api/list/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    list_DB.update({
        completed: 1
    }, condition, function (result) {
        if (result.changedRows == 0) {
            console.log("has not changed")
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            console.log("has changed")
            res.status(200).end();
        }
    });
});

/*=============Delete========================================= */
router.delete("/api/list/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log(req.param.id);
    console.log("condition", condition);

    list_DB.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

module.exports = router;











