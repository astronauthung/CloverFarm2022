const express = require('express');
const router = express.Router();

const workshopController = require('../app/controllers/workshopController');

//[POST] registration
router.post('/registration', workshopController.registration);

router.get('/explore', workshopController.register);
router.get('/', workshopController.index);
//contact

module.exports = router;
