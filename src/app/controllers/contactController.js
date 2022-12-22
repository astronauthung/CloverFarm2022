const Contact = require('../models/contact');
const nodemailer = require('nodemailer');


class contactController {
    contact(req, res) {
        res.render(('contact'), {
            isNotLandingpage: true,
            style: "contact",
            title: "Contact | CLOVER ®",
        });
    }
    //[POST] /contact/send
    send(req, res,next) {
    const contact = new Contact(req.body);
    contact.save()
        .then()
        .catch(error => {});
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hungnp.21it@vku.udn.vn',
            pass: 'axrgxiqosrqyrksx'
        }
    })
    const mailOptions = {
        from: 'hungnp.21it@gmail.com',
        to: req.body.contact_mail,
        subject: 'From Clover Farm to ' + req.body.contact_name,
        text: 'Your message has been saved by the system. We will reply you as soon as possible!'
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        } else {
            res.redirect('/contact');
        }
    })
}
}

module.exports = new contactController();