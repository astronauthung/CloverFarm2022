"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Contact = require('../models/contact');

var contactController =
/*#__PURE__*/
function () {
  function contactController() {
    _classCallCheck(this, contactController);
  }

  _createClass(contactController, [{
    key: "contact",
    value: function contact(req, res) {
      res.render('contact', {
        style: "contact",
        title: "Contact | CLOVER ®"
      });
    } //[POST] /contact/help

  }, {
    key: "help",
    value: function help(req, res, next) {
      var contact = new Contact(req.body);
      contact.save() // .then(() => res.redirect('/contact'))
      ["catch"](function (error) {});
    }
  }]);

  return contactController;
}();

module.exports = new contactController();