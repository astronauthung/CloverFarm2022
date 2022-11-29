"use strict";

var express = require('express');

var router = express.Router();

var gettingController = require('../app/controllers/gettingController');

router.get('/', gettingController.index); //contact

module.exports = router;