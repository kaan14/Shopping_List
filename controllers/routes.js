


var express = require("express");

var list_DB = require("../models/list.js");


// look up for express.Router???
var router = express.Router();

/*=============GET========================================= */
router.get("/mylist", function (req, res) {
    list_DB.all(function(data){
        var db_data = data;
        console.log(db_data); 
        
        var listObj = {
            willBuy: db_data, 
        }
        //console.log(listObj);
        res.render("index", listObj);
    })
    
});




/*=============POST========================================= */

router.post("/api/newTask", function(req, res){
    list_DB.create(req.body.task, function(data){

        res.json({id: data.InsertID}); 
    }); 
}); 


router.put("/api/list/:id", function(req, res){

    var status = "id" + req.body.id; 
    list_DB.update({completed: req.body.completed })

}); 

// /*=============UPDATE========================================= */
// router.put("/api/list/:id", function (req, res) {

//     var status = "id: " + req.body.id; 
// list_DB.update({done:  req.body.completed
// },status, function(result){
    
// //????????????? ask below part, why do we use req.body.sleepy
//     cat.update({
//         sleepy: req.body.sleepy
//       }, condition, function(result) {
//         if (result.changedRows == 0) {
//           // If no rows were changed, then the ID must not exist, so 404
//           return res.status(404).end();
//         } else {
//           res.status(200).end();
//         }
//       });
// })
// });


// router.delete("/api/list/:id", function (req, res) {

//     var status = req.param.id; 

//     //????????
//     list.delete(status, function(result) {
//         if (result.affectedRows == 0) {
//           // If no rows were changed, then the ID must not exist, so 404
//           return res.status(404).end();
//         } else {
//           res.status(200).end();
//         }
//       });
// });


module.exports = router;











