"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Contact = require('../models/contact');

var nodemailer = require('nodemailer');

var path = require('path');

var hbs = require('nodemailer-express-handlebars');

var contactController =
/*#__PURE__*/
function () {
  function contactController() {
    _classCallCheck(this, contactController);
  }

  _createClass(contactController, [{
    key: "contact",
    value: function contact(req, res) {
      res.render('contact', {
        isNotLandingpage: true,
        style: "contact",
        title: "Contact | CLOVER ®"
      });
    } //[POST] /contact/send

  }, {
    key: "send",
    value: function send(req, res, next) {
      var contact = new Contact(req.body);
      contact.save().then()["catch"](function (error) {});
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
        to: req.body.contact_mail,
        subject: 'Contact Confirmation',
        template: 'confirmation-contact',
        context: {
          title: 'Hi ' + req.body.contact_name + ',',
          subtitle: 'Thank you for contacting us. We will contact you as soon as possible.',
          footer: 'If you are in a hurry, you can contact us by phone +84 789-1909-03 or our office in Alaska - United States.',
          wishes: 'Best Regards,',
          signature: 'Clover Farm.'
        }
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.send('error');
        } else {
          res.redirect('/contact');
        }
      });
    }
  }]);

  return contactController;
}();

module.exports = new contactController();