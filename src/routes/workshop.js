const express = require('express');
const router = express.Router();

const workshopController = require('../app/controllers/workshopController');

router.get('/', workshopController.index);

//contact

module.exports = router;
