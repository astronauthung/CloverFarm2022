const Workshop = require('../models/workshop');
const Workshop_registration = require('../models/workshop_reg');

class workshopController{
    index(req, res, next) {
    Workshop.find({})
        .lean()
        .then(workshops => {
            res.render('layouts/workshop/workshop-index', {
                workshops: workshops,
                style: "workshop",
                title: "Workshop | CLOVER ®",
            })
        });
    }
    register (req, res) {
        res.render('layouts/workshop/workshop-register', {
            // workshops: workshops,
            style: "workshop-register",
            title: "Workshop Explore | CLOVER ®",
        })
    }

    registration(req, res, next) {
        const workshop_registration = new Workshop_registration(req.body);
        workshop_registration.save()
            .then(() => res.redirect('/workshop'))
            .catch(error => {
            });
    }
}
module.exports = new workshopController();