"use strict";

var express = require('express');

var router = express.Router();

var workshopController = require('../app/controllers/workshopController');

router.get('/', workshopController.index); //contact

module.exports = router;