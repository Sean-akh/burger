// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm');

var burger = {
  all: function(cb) {
    orm.all("burgers", function(burgerData) {
      cb(burgerData);
    });
  },

  //update
  update: function(id, cb) {
    orm.update("burgers", id, cb);
    },

  //Create
  create: function(name, cb){
    orm.create("burgers", name, cb);
  }

/////////////////
  };

// Export the database functions for the controller (burgersController.js).
module.exports = burger;