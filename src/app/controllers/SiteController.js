const Course = require('../models/course');

class siteController {
    index(req, res) {
        Course.find({}, function(err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'ERROR!!!' });
            }
        })
        
        // res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new siteController();
