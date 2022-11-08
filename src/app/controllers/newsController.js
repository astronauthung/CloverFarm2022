class newsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('News Detail');
    }
    workshop(req, res)
    {
        res.render(('workshop'));
    }
    contact(req, res) {
        res.render(('contact'));
    }
    product(req, res) {
        res.render(('product'));
    }

}

module.exports = new newsController();
