"use strict";

var express = require('express');

var router = express.Router();

var siteController = require('../app/controllers/SiteController'); // router.get('/contact', siteController.contact);


router.get('/', siteController.index); //contact

module.exports = router;