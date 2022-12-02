"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Workshop = require('../models/workshop');

var workshopController =
/*#__PURE__*/
function () {
  function workshopController() {
    _classCallCheck(this, workshopController);
  }

  _createClass(workshopController, [{
    key: "index",
    value: function index(req, res, next) {
      Workshop.find({}).lean().then(function (workshops) {
        res.render('layouts/workshop/workshop-index', {
          workshops: workshops,
          style: "workshop",
          title: "Workshop | CLOVER ®"
        });
      });
    }
  }, {
    key: "register",
    value: function register(req, res) {
      res.render('layouts/workshop/workshop-register', {
        // workshops: workshops,
        style: "workshop-register",
        title: "Workshop Explore | CLOVER ®"
      });
    }
  }]);

  return workshopController;
}(); // index(req, res) {
//     res.render(('layouts/workshop/workshop-index'),{ 
//         style: "workshop",
//         title: "Workshop | CLOVER ®",
//     });
// }


module.exports = new workshopController();