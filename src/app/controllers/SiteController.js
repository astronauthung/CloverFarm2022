const Course = require('../models/course');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class siteController {
    index(req, res , next) {
        Course.find({})
            .then(courses => { res.render('home',{ courses: multipleMongooseToObject(courses) }) })
            .catch(next);
        
        
        // res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new siteController();
