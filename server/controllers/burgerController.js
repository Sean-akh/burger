var burger = require('../models/burgerDbRules');

//root directory
exports.index = function (req, res) {
  burger.all(function (burgerData) {
    console.log(burgerData);
    res.render("index", {
      burgerData
    });
//console.log("the index is loaded");
  })
};

exports.update = function (req, res) {
//console.log("\n-------------\nupdate function started\n-------------\n");
  burger.update(req.body.burger_id, function (result) {

    res.redirect("/");
  });
};

exports.post = function (req, res) {
//console.log("\n-------------\npost function started\n-------------\n");
  burger.create(req.body.burger_name, function (result) {
    res.redirect("/");
  });
};