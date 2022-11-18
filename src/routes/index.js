const newsRouter = require('./news');
const catalogRouter = require('./catalog');
const workshopRouter = require('./workshop');
const productRouter = require('./product');
const siteRouter = require('./site');

function route(app) {
    app.use('/product', productRouter);
    app.use('/workshop', workshopRouter);
    app.use('/catalog', catalogRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
