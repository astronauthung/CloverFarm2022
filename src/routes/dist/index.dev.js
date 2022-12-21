"use strict";

var catalogRouter = require('./catalog');

var workshopRouter = require('./workshop');

var productRouter = require('./product');

var siteRouter = require('./site');

var contactRouter = require('./contact');

var landingRouter = require('./landingpage');

function route(app) {
  app.use('/contact', contactRouter);
  app.use('/product', productRouter);
  app.use('/workshop', workshopRouter);
  app.use('/catalog', catalogRouter);
  app.use('/', siteRouter);
  app.use('/landing', landingRouter);
}

module.exports = route;