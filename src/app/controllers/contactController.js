const Contact = require('../models/contact');
const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');


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
                pass: 'uyckjzblbryemzcb'
            }
        })
        const handlebarOptions = {
            viewEngine: {
                extName: '.hbs',
                partialsDir: path.resolve('src/resources/views'),
                defaultLayout: false,
            },
            viewPath: path.resolve('src/resources/views'),
            extName: '.hbs',
        }
        transporter.use('compile', hbs(handlebarOptions));

        const mailOptions = {
            from: '"Clover Farm" <hungnp.21it@vku.udn.vn>"',
            to: req.body.contact_mail,
            subject: 'Contact Confirmation',
            template: 'confirmation-contact',
            context: {
                title: 'Hi ' + req.body.contact_name + ',',
                subtitle: 'Thank you for contacting us. We will contact you as soon as possible.',

                footer: 'If you are in a hurry, you can contact us by phone +84 789-1909-03 or our office in Alaska - United States.',
                wishes: 'Best Regards,',
                signature: 'Clover Farm.',
            }
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