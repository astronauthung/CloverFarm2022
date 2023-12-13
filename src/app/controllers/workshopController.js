const Workshop = require('../models/workshop');
const Workshop_registration = require('../models/workshop_reg');
const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');

class workshopController{
    index(req, res, next) {
    Workshop.find({})
        .lean()
        .then(workshops => {
            res.render('layouts/workshop/workshop-index', {
                workshops: workshops,
                style: "workshop",
                title: "Workshop | CLOVER ®",
            })
        });
    }
    register(req, res){
        res.render('layouts/workshop/workshop-register', {
            // workshops: workshops,
            style: "workshop-register",
            title: "Workshop Explore | CLOVER ®",
        })
    }

    registration(req, res, next) {
        const workshop_registration = new Workshop_registration(req.body);
        workshop_registration.save()
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
                to: req.body.email,
                subject: 'Workshop Registration Confirmation',
                template: 'confirmation-email',
                context: {
                    title: 'Hi ' + req.body.firstname + ' ' + req.body.lastname + ',',
                    subtitle: 'Thank you for signing up for the workshop. Below is your registration information:',

                    firstname: 'First Name: ' + req.body.firstname,
                    lastname: 'Last Name: ' + req.body.lastname,
                    birthday: 'Birthday: ' + req.body.birthday,
                    gender: 'Gender: ' + req.body.gender,
                    email: 'Email: ' + req.body.email,
                    phone_number: 'Phone Number: ' + req.body.phone_number,

                    footer: 'If you have any changes to your personal information, please reply to this email!',
                    wishes: 'Best Regards,',
                    signature: 'Clover Farm.',
                }
            }
            transporter.sendMail(mailOptions, (error, info) => {
                if(error) {
                    console.log(error);
                    res.send('error');
                } else {
                    res.redirect('/workshop');
                }
            })
    }
}

module.exports = new workshopController();