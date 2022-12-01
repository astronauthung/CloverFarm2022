const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

// router.get('/contact', siteController.contact);
router.get('/', siteController.index);

//contact

module.exports = router;
