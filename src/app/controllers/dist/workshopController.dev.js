"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Workshop = require('../models/workshop');

var Workshop_registration = require('../models/workshop_reg');

var nodemailer = require('nodemailer');

var path = require('path');

var hbs = require('nodemailer-express-handlebars');

var workshopController =
/*#__PURE__*/
function () {
  function workshopController() {
    _classCallCheck(this, workshopController);
  }

  _createClass(workshopController, [{
    key: "index",
    value: function index(req, res, next) {
      Workshop.find({}).lean().then(function (workshops) {
        res.render('layouts/workshop/workshop-index', {
          workshops: workshops,
          style: "workshop",
          title: "Workshop | CLOVER ®"
        });
      });
    }
  }, {
    key: "register",
    value: function register(req, res) {
      res.render('layouts/workshop/workshop-register', {
        // workshops: workshops,
        style: "workshop-register",
        title: "Workshop Explore | CLOVER ®"
      });
    }
  }, {
    key: "registration",
    value: function registration(req, res, next) {
      var workshop_registration = new Workshop_registration(req.body);
      workshop_registration.save().then()["catch"](function (error) {});
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'hungnp.21it@vku.udn.vn',
          pass: 'uyckjzblbryemzcb'
        }
      });
      var handlebarOptions = {
        viewEngine: {
          extName: '.hbs',
          partialsDir: path.resolve('src/resources/views'),
          defaultLayout: false
        },
        viewPath: path.resolve('src/resources/views'),
        extName: '.hbs'
      };
      transporter.use('compile', hbs(handlebarOptions));
      var mailOptions = {
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
          signature: 'Clover Farm.'
        }
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.send('error');
        } else {
          res.redirect('/workshop');
        }
      });
    }
  }]);

  return workshopController;
}();

module.exports = new workshopController();