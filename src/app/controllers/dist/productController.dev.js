"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../models/product'),
    Product = _require.Product,
    Collection = _require.Collection;

var _require2 = require('../../utils/mongoose'),
    multipleMongooseToObject = _require2.multipleMongooseToObject;

var productController =
/*#__PURE__*/
function () {
  function productController() {
    _classCallCheck(this, productController);
  }

  _createClass(productController, [{
    key: "index",
    value: function index(req, res, next) {
      Product.find({}).then(function (products) {
        Collection.find({}).then(function (collections) {
          res.render('layouts/product/product-index', {
            products: multipleMongooseToObject(products),
            collections: multipleMongooseToObject(collections),
            style: "product",
            title: "Product | CLOVER ®"
          });
        })["catch"](next);
      });
    }
  }]);

  return productController;
}();

module.exports = new productController();