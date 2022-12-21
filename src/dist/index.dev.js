"use strict";

var express = require('express');

var morgan = require('morgan');

var route = require('./routes');

var path = require('path');

var app = express();
var port = 3000;

var bodyParser = require('body-parser');

var handlebars = require('express-handlebars');

var nodemailer = require('nodemailer');

var db = require('./config/database');

app.use(express.json()); // Connect to Database

db.connect();
app.post('/', function (req, res) {
  console.log('/*------------------*/');
  console.log(req.body);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hungnp.21it@vku.udn.vn',
      pass: 'axrgxiqosrqyrksx'
    }
  });
  var mailOptions = {
    from: 'hungnp.21it@gmail.com',
    to: req.body.email,
    subject: 'From Clover Farm to ' + req.body.name,
    text: 'Your message has been saved by the system. We will reply you as soon as possible!'
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('/*------------------*/');
      console.log('Email sent success');
      res.send('success');
    }
  });
});
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
  console.log("app listening on http://localhost:".concat(port));
});