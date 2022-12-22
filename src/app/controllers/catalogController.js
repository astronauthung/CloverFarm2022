const Catalog = require('../models/catalog');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class catalogController{
    index(req, res, next) {
        Catalog.find({})
            .then(catalogs => {
                res.render('layouts/catalog/index', {
                    catalogs: multipleMongooseToObject(catalogs),
                    isNotLandingpage: true,
                    style: "catalog",
                    title: "Catalog | CLOVER ®",
                })
            })
            .catch(next);
    }
}
module.exports = new catalogController();