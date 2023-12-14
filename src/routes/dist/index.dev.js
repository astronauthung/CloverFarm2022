"use strict";

var catalogRouter = require('./catalog');

var workshopRouter = require('./workshop');

var productRouter = require('./product');

var siteRouter = require('./site');

var contactRouter = require('./contact');

var landingRouter = require('./landingpage');

var chatbotRouter = require('./chatbot');

function route(app) {
  app.use('/chatbot', chatbotRouter);
  app.use('/contact', contactRouter);
  app.use('/product', productRouter);
  app.use('/workshop', workshopRouter);
  app.use('/catalog', catalogRouter);
  app.use('/home', siteRouter);
  app.use('/', landingRouter);
}

module.exports = route;