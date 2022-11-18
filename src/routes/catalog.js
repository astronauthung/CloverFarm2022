const express = require('express');
const router = express.Router();

const catalogController = require('../app/controllers/catalogController');

router.get('/', catalogController.index);

//contact

module.exports = router;
