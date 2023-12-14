const catalogRouter = require('./catalog');
const workshopRouter = require('./workshop');
const productRouter = require('./product');
const siteRouter = require('./site');
const contactRouter = require('./contact');
const landingRouter = require('./landingpage');
const chatbotRouter = require('./chatbot');

function route(app) {
    app.use('/chatbot', chatbotRouter);
    app.use('/contact', contactRouter)
    app.use('/product', productRouter);
    app.use('/workshop', workshopRouter);
    app.use('/catalog', catalogRouter);
    app.use('/home', siteRouter);
    app.use('/', landingRouter);
}

module.exports = route;
