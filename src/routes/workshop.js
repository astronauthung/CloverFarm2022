const express = require('express');
const router = express.Router();

const workshopController = require('../app/controllers/workshopController');

router.get('/', workshopController.index);
router.get('/explore', workshopController.register);

//contact

module.exports = router;
