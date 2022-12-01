"use strict";

var express = require('express');

var router = express.Router();

var contactController = require('../app/controllers/contactController');

router.get('/', contactController.contact); //contact

module.exports = router;