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

}

module.exports = new newsController();
