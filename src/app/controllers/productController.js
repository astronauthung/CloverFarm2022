
const { Product, Collection } = require('../models/product');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class productController{
    index(req, res, next) {
        Product.find({})
            .then(products => {
                Collection.find({})
                .then(collections => {
                    res.render(('layouts/product/product-index'),{ 
                        products: multipleMongooseToObject(products),
                        collections: multipleMongooseToObject(collections),
                        style: "product",
                        title: "Product | CLOVER ®",
                    });
            })
            .catch(next);
        }
    )}
}
module.exports = new productController();