//dependencies
var express = require("express");
var router = express.Router();

//Import the controllers
var burgerController = require('../controllers/burgerController.js');

//GET request to home page
router.get('/', burgerController.index);

//update the databse route
router.post('/update', burgerController.update);

//add new item to the DB Route
router.post('/create', burgerController.post);


////////////////////////
module.exports = router;