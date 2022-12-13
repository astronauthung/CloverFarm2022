"use strict";

var mongoose = require('mongoose');

function connect() {
  return regeneratorRuntime.async(function connect$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect("mongodb+srv://DuyHoang:duybroso1@cloverfarm2022.4ihfbuf.mongodb.net/CloverFarm", {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 3:
          console.log("Connected to mongodb");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log("failed to connect to mongodb");

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

module.exports = {
  connect: connect
};