const Collection = require('../models/collection');
const Product = require('../models/product');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class productController{
    index(req, res, next) {
        Product.find({})
        Collection.find({})
            .then(collections => {
                res.render(('layouts/product/product-index'),{ 
                    collections: multipleMongooseToObject(collections),
                    style: "product",
                    title: "Product | CLOVER ®",
                });
            })
            .catch(next);
    }
}
module.exports = new productController();