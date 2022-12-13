"use strict";

var express = require('express');

var path = require('path');

var app = express();
var port = 3000;

var morgan = require('morgan');

var handlebars = require('express-handlebars');

var bodyParser = require('body-parser');

var route = require('./routes');

var db = require('./config/database'); // Connect to Database


db.connect();
app.use(morgan('combined'));
app.use(express["static"](path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); //route INIT

route(app);
app.listen(port, function () {
  console.log(" app listening on port ".concat(port));
});