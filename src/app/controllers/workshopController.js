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
}

    // index(req, res) {
    //     res.render(('layouts/workshop/workshop-index'),{ 
    //         style: "workshop",
    //         title: "Workshop | CLOVER ®",
    //     });
    // }
module.exports = new workshopController();