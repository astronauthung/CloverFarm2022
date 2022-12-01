"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var siteController =
/*#__PURE__*/
function () {
  function siteController() {
    _classCallCheck(this, siteController);
  }

  _createClass(siteController, [{
    key: "index",
    value: function index(req, res, next) {
      res.render('home', {
        style: "home",
        title: "Home | CLOVER ®"
      });
    }
  }, {
    key: "contact",
    value: function contact(req, res, next) {
      res.render('contact', {
        style: "contact",
        title: "Contact | CLOVER ®"
      });
    }
  }]);

  return siteController;
}();

module.exports = new siteController();