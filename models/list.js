var orm = require("../config/orm.js");

/*Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.*/


var mdlList = {

    all: function (cb) {
        orm.all("shplists", function (res) {
            cb(res);
        })
    },
    
    create: function (col, val, cb) {
        orm.create("shplists", col, val, function (res) {
            cb(res);
        })
    },
    update: function(objColVals, condition, cb){
        orm.update("shplists", objColVals, condition, cb, function(res){
            cb(res); 
        })
    },
    delete: function(condition, cb){
        orm.delete("shplists", condition, cb, function(res){
            cb(res); 
        })
    }
}

module.exports = mdlList; 



