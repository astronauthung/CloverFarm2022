"use strict";

var express = require('express');

var route = express.Router();

var chatbotController = require('../app/controllers/chatbotController');

route.get('/', chatbotController.index);
module.exports = route;