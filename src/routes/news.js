const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/newsController');


router.get('/workshop', newsController.workshop);
router.get('/contact', newsController.contact);
router.get('/product', newsController.product);

router.get('/:slug', newsController.show);
router.get('/', newsController.index);



module.exports = router;
