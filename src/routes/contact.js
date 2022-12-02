const express = require('express');
const router = express.Router();

const contactController = require('../app/controllers/contactController');

router.post('/help', contactController.help);
router.get('/', contactController.contact);

//contact

module.exports = router;
