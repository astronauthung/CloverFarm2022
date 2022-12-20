"use strict";

var express = require('express');

var router = express.Router();

var nodemailer = require('nodemailer');

var contactController = require('../app/controllers/contactController');

router.post('/help', contactController.help);
router.get('/', contactController.contact); //contact

module.exports = router;