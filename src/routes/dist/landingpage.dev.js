"use strict";

var express = require('express');

var router = express.Router();

var landingController = require('../app/controllers/landingController');

router.get('/', landingController.index);
module.exports = router;