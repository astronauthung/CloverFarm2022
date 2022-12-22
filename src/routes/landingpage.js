const express = require('express');
const router = express.Router();

const landingController = require('../app/controllers/landingController');

router.get('/', landingController.index);

module.exports = router;