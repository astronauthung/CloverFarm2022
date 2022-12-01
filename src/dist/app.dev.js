"use strict";

var express = require('express');

var mongoose = require('mongoose');

var AdminJS = require('adminjs');

var AdminJSExpress = require('@adminjs/express');

var AdminJSMongoose = require('@adminjs/mongoose');

var connectDb = require('./config/database/index');

var workshop = require('./app/models/workshop');

var catalog = require('./app/models/catalog'); // const contact = require('./app/models/contact');


var bodyParser = require('body-parser'); // app.use(bodyParser.urlencoded({ extended: true }));
// app.post('/contact', (req, res) => {
//     let contact = new Contact({
//       contact_name: req.body.contact_name,
//       contact_problem: req.body.contact_problem,
//       contact_mail: req.body.contact_mail,
//     });
//     contact.save();
// });


var PORT = 9999;
var catalogOption = {
  resource: catalog
};
var workshopOption = {
  resource: workshop
}; // const contactOption = {
//   resource: contact,
// }

AdminJS.registerAdapter(AdminJSMongoose); // init adminJS

var adminJS = new AdminJS({
  databases: [],
  rootPath: '/admin',
  resources: [workshopOption, catalogOption]
});
var adminJSRouter = AdminJSExpress.buildRouter(adminJS); // mount adminJS route and run express app

var app = express();
app.use(adminJS.options.rootPath, adminJSRouter);
connectDb.connect();
app.listen(PORT, function () {
  return console.log('AdminJS is under localhost:' + PORT + '/admin');
});