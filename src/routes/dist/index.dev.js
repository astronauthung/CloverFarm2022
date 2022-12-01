"use strict";

var newsRouter = require('./news');

var catalogRouter = require('./catalog');

var workshopRouter = require('./workshop');

var productRouter = require('./product');

var siteRouter = require('./site');

var contactRouter = require('./contact');

function route(app) {
  app.use('/contact', contactRouter);
  app.use('/product', productRouter);
  app.use('/workshop', workshopRouter);
  app.use('/catalog', catalogRouter);
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
}

module.exports = route;