const Course = require('../models/course');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class siteController {
    index(req, res, next) {
        res.render('home', {
        style: "home",
        title: "Clover Farm",
        });
    }
    search(req, res) {
        res.render('search',{
            style: "search",
        });
    }
}

module.exports = new siteController();
