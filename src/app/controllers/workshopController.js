class workshopController{
    index(req, res) {
        res.render(('layouts/workshop/workshop-index'),{ 
            style: "workshop",
            title: "Workshop | CLOVER ®",
        });
    }
}
module.exports = new workshopController();