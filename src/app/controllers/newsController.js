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
            });
    }
    contact(req, res) {
        res.render(('contact'), {
            style: "contact",
        });
    }
    product(req, res) {
        res.render(('product'),{
            style: "product",
        });
    }
    home(req, res) {
        res.render(('home'));
    }
    catalog(req, res) {
        res.render(('catalog'),{ 
            style: "catalog",
        });
    }

}

module.exports = new newsController();
