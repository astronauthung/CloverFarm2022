const Workshop = require('../models/workshop');

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
}

    // index(req, res) {
    //     res.render(('layouts/workshop/workshop-index'),{ 
    //         style: "workshop",
    //         title: "Workshop | CLOVER ®",
    //     });
    // }
module.exports = new workshopController();