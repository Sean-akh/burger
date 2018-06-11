//dependencies
var express = require('express');
const path = require('path');
var bodyparser = require('body-parser');
var exhbs = require('express-handlebars');

//start the server
var app = express();

//define the port
const PORT = process.env.PORT || 8080;

//define data parsing
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//define public folder
app.use(express.static('./app/public'));

//handlebar defaults
app.engine('handlebars', exhbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//define routing
var routes = require('./server/routes/burgerRoutes.js');
app.use(routes);

//start listening to port 8080
app.listen(PORT, function(){
    console.log('app listening on http://localhost:' + PORT);
});