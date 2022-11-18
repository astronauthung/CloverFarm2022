class catalogController{
    index(req, res) {
        res.render(('layouts/catalog/index'),{ 
            style: "catalog",
            title: "Catalog | CLOVER ®",
        });
    }
}
module.exports = new catalogController();