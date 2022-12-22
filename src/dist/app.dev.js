"use strict";

var express = require('express');

var path = require('path');

var mongoose = require('mongoose');

var AdminJS = require('adminjs');

var AdminJSExpress = require('@adminjs/express');

var AdminJSMongoose = require('@adminjs/mongoose');

var connectDb = require('./config/database/index');

var workshop = require('./app/models/workshop');

var catalog = require('./app/models/catalog');

var contact = require('./app/models/contact');

var workshop_reg = require('./app/models/workshop_reg');

var collection = require('./app/models/collection');

var product = require('./app/models/product');

var bodyParser = require('body-parser');

var PORT = 9999;
var catalogOption = {
  resource: catalog
};
var workshopOption = {
  resource: workshop
};
var contactOption = {
  resource: contact
};
var workshop_regOption = {
  resource: workshop_reg
};
var collectionOption = {
  resource: collection
};
var productOption = {
  resource: product
};
AdminJS.registerAdapter(AdminJSMongoose); // init adminJS

var adminJS = new AdminJS({
  databases: [],
  rootPath: '/admin',
  resources: [workshopOption, catalogOption, contactOption, workshop_regOption, collectionOption, productOption],
  assets: {
    styles: ["/css/admin.css"]
  }
});
var adminJSRouter = AdminJSExpress.buildRouter(adminJS); // mount adminJS route and run express app

var app = express();
app.use(adminJS.options.rootPath, adminJSRouter);
app.use(express["static"](path.join(__dirname, 'public')));
connectDb.connect();
app.listen(PORT, function () {
  return console.log('AdminJS is under http://localhost:' + PORT + '/admin');
});