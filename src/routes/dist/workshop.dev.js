"use strict";

var express = require('express');

var router = express.Router();

var workshopController = require('../app/controllers/workshopController');

router.get('/', workshopController.index);
router.get('/explore', workshopController.register); //contact

module.exports = router;