"use strict";

var express = require('express');

var Connect = require('connect-pg-simple');

var session = require('express-session');

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

var _require = require('./app/models/product'),
    Product = _require.Product,
    Collection = _require.Collection;

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
var productOption = {
  resource: Product
};
var collectionOption = {
  resource: Collection
};
var DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password'
};

var authenticate = function authenticate(email, password) {
  return regeneratorRuntime.async(function authenticate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password)) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", Promise.resolve(DEFAULT_ADMIN));

        case 2:
          return _context.abrupt("return", null);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

AdminJS.registerAdapter(AdminJSMongoose); // init adminJS

var adminJS = new AdminJS({
  databases: [],
  rootPath: '/admin',
  resources: [workshopOption, catalogOption, contactOption, workshop_regOption, productOption, collectionOption],
  assets: {
    styles: ["/css/admin.css"]
  }
});
var ConnectSession = Connect(session);
var adminJSRouter = AdminJSExpress.buildAuthenticatedRouter(adminJS, {
  authenticate: authenticate,
  cookieName: 'adminjs',
  cookiePassword: 'somepassword'
}, null, {
  resave: true,
  saveUninitialized: true,
  secret: 'somepassword',
  cookie: {
    httpOnly: process.env.NODE_ENV === 'production',
    secure: process.env.NODE_ENV === 'production'
  },
  name: 'adminjs'
}); // mount adminJS route and run express app

var app = express();
app.use(adminJS.options.rootPath, adminJSRouter);
app.use(express["static"](path.join(__dirname, 'public')));
connectDb.connect();
app.listen(PORT, function () {
  return console.log('Admin is under http://localhost:' + PORT + '/admin');
});