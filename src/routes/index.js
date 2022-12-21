const catalogRouter = require('./catalog');
const workshopRouter = require('./workshop');
const productRouter = require('./product');
const siteRouter = require('./site');
const contactRouter = require('./contact');
const landingRouter = require('./landingpage');

function route(app) {
    app.use('/contact', contactRouter)
    app.use('/product', productRouter);
    app.use('/workshop', workshopRouter);
    app.use('/catalog', catalogRouter);
    app.use('/', siteRouter);
    app.use('/landing', landingRouter);

}

module.exports = route;
