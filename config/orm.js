var connection = require("./connection.js"); 

/*
* In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()`
     * 
     * 
     * `insertOne()`
     * `updateOne()`

   * Export the ORM object in `module.exports`.
*/



// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";

function createQuestionMarks(){
  var marks = []; 


  for (var i = 0; i < marks.length; i++){
    marks.push("?"); 

  }
 return marks.toString(); 
}

function objToSql(ob){

}



var queryAll = "SELECT * FROM shplists"; 

connection.query(queryAll, function(response){

}); 