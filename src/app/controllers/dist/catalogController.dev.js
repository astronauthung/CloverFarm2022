"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Catalog = require('../models/catalog');

var _require = require('../../utils/mongoose'),
    multipleMongooseToObject = _require.multipleMongooseToObject;

var catalogController =
/*#__PURE__*/
function () {
  function catalogController() {
    _classCallCheck(this, catalogController);
  }

  _createClass(catalogController, [{
    key: "index",
    value: function index(req, res, next) {
      Catalog.find({}).then(function (catalogs) {
        res.render('layouts/catalog/index', {
          catalogs: multipleMongooseToObject(catalogs),
          style: "catalog",
          title: "Catalog | CLOVER ®"
        });
      })["catch"](next);
    }
  }]);

  return catalogController;
}();

module.exports = new catalogController();