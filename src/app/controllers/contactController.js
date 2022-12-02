const Contact = require('../models/contact');

class contactController {
    contact(req, res) {
        res.render(('contact'), {
            style: "contact",
            title: "Contact | CLOVER ®",
        });
    }
    //[POST] /contact/help
    help(req, res,next) {
        const contact = new Contact(req.body);
        contact.save()
            .then(() => res.redirect('/'))
            .catch(error => {});
    }
}

module.exports = new contactController();