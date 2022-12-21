
class landingController {
    index(req, res, next) {
        res.render('landingpage', {
            style: "landing",
            title: "Clover Farm Official Website | CLOVER ®",
        })
    }
}

module.exports = new landingController();