"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var AdminJSMongoose = _interopRequireWildcard(require("@adminjs/mongoose"));

var _workshopModel = require("./models/workshop.model.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AdminJS = require('adminjs');

var mongoose = require('mongoose');

var AdminJSExpress = require('@adminjs/express');

var express = require('express');

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database
});
var PORT = 9999;

var start = function start() {
  var app, adminOptions, admin, adminRouter;
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          app = express();
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect('mongodb+srv://PhucHung:phuchungoccho@cloverfarm2022.4ihfbuf.mongodb.net/test'));

        case 3:
          adminOptions = {
            resources: [_workshopModel.Workshop]
          };
          admin = new AdminJS({});
          adminRouter = AdminJSExpress.buildRouter(admin);
          app.use(admin.options.rootPath, adminRouter);
          app.listen(PORT, function () {
            console.log("AdminJS started on http://localhost:".concat(PORT).concat(admin.options.rootPath));
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

start();