const express =  require('express');
const route = express.Router();

const chatbotController = require('../app/controllers/chatbotController')

route.get('/', chatbotController.index);

module.exports = route;