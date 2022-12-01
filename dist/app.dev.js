"use strict";

var express = require('express');

var mongoose = require('mongoose');

var AdminJS = require('adminjs');

var AdminJSExpress = require('@adminjs/express');

var AdminJSMongoose = require('@adminjs/mongoose');

var connectDb = require('../nodejs_test/src/config/database/index');

var workshop = require('../nodejs_test/src/app/models/workshop');

var catalog = require('../nodejs_test/src/app/models/catalog');

var catalogOption = {
  resource: catalog
};
var workshopOption = {
  resource: workshop
};
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
app.listen(8080, function () {
  return console.log('AdminJS is under localhost:8080/admin');
});