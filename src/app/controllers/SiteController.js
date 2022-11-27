
class siteController {
    index(req, res, next) {
        res.render('home', {
        style: "home",
        title: "Home | CLOVER ®",
        });
    }
}

module.exports = new siteController();
