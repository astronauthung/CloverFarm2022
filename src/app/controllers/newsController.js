class newsController {
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('News Detail');
    }
    contact(req, res) {
        res.render(('contact'), {
            style: "contact",
            title: "Contact | CLOVER ®",
        });
    }
    home(req, res) {
        res.render(('home'));
    }
}

module.exports = new newsController();
