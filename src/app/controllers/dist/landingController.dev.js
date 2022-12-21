"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var landingController =
/*#__PURE__*/
function () {
  function landingController() {
    _classCallCheck(this, landingController);
  }

  _createClass(landingController, [{
    key: "index",
    value: function index(req, res, next) {
      res.render('landingpage', {
        style: "landing",
        title: "Clover Farm Official Website | CLOVER ®"
      });
    }
  }]);

  return landingController;
}();

module.exports = new landingController();