const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const contactController = require('../app/controllers/contactController');

router.post('/send', contactController.send);
router.get('/', contactController.contact);
//contact

module.exports = router;
