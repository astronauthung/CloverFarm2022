class productController{
    index(req, res) {
        res.render(('layouts/product/product-index'),{ 
            style: "product",
            title: "Product | CLOVER ®",
        });
    }
}
module.exports = new productController();