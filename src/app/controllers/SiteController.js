
class siteController {
    index(req, res, next) {
        res.render('home', {
        style: "home",
        title: "Home | CLOVER ®",
        });
    }
    contact(req, res, next) {
        res.render('contact', {
        style: "contact",
        title: "Contact | CLOVER ®",
        });
    }
}

module.exports = new siteController();
