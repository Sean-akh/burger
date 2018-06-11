var connection = require("../config/connection");

//start orm 
var orm = {
    //select all
    all: function(burgers, cb) {
        var querystring = "SELECT * FROM " + burgers + ";";
        connection.query(querystring, function(err, res){
            if (err) {throw err;}
            cb(res);
        })
    },

    //UPDATE
    update: function(table, id, cb) {
        var querystring = "UPDATE " + table + " SET devoured = true WHERE id = " + id + ";";
        connection.query(querystring, function(err, result){
            if (err) {throw err;}
            cb(result);
        })
    },

    //CREATE
    create: function(table, vals, cb){
        var querystring = "INSERT INTO " + table + " (burger_name, devoured) VALUES ('" + vals + "', false);";
        connection.query(querystring, function(err, result){
            if (err) {throw err;}
            cb(result);
        })
    }

////////////////////////////////    
}
module.exports = orm;