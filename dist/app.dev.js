"use strict";

var AdminJS = require('adminjs');

var mongoose = require('mongoose');

var AdminJSExpress = require('@adminjs/express');

var express = require('express');

var PORT = 9999;

var start = function start() {
  var app, admin, adminRouter;
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          app = express();
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect('mongodb+srv://PhucHung:phuchungoccho@cloverfarm2022.4ihfbuf.mongodb.net/test'));

        case 3:
          admin = new AdminJS({});
          adminRouter = AdminJSExpress.buildRouter(admin);
          app.use(admin.options.rootPath, adminRouter);
          app.listen(PORT, function () {
            console.log("AdminJS started on http://localhost:".concat(PORT).concat(admin.options.rootPath));
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

start();