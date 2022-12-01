class contactController {
    contact(req, res) {
        res.render(('contact'), {
            style: "contact",
            title: "Contact | CLOVER ®",
        });
    }
}
module.exports = new contactController();