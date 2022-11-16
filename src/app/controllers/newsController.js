class newsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('News Detail');
    }
    workshop(req, res)
    {
        res.render(('workshop'),{
            style: "workshop",
            title: "Workshop | CLOVER ®",
            });
    }
    contact(req, res) {
        res.render(('contact'), {
            style: "contact",
            title: "Contact | CLOVER ®",
        });
    }
    product(req, res) {
        res.render(('product'),{
            style: "product",
            title: "Product | CLOVER ®",
        });
    }
    home(req, res) {
        res.render(('home'));
    }
    catalog(req, res) {
        res.render(('catalog'),{ 
            style: "catalog",
            title: "Catalog | CLOVER ®",
        });
    }

}

module.exports = new newsController();
