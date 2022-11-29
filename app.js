const express = require('express');
const mongoose = require('mongoose');
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');
const connectDb = require('../nodejs_test/src/config/database/index');

const workshop = require('../nodejs_test/src/app/models/workshop');
const catalog = require('../nodejs_test/src/app/models/catalog');

const catalogOption = {
    resource: catalog,
}

const workshopOption = {
  resource: workshop,
}

AdminJS.registerAdapter(AdminJSMongoose);


// init adminJS
const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [workshopOption, catalogOption],
});
const adminJSRouter = AdminJSExpress.buildRouter(adminJS);

// mount adminJS route and run express app
const app = express();
app.use(adminJS.options.rootPath, adminJSRouter);

connectDb.connect();

app.listen(8080, () => console.log('AdminJS is under localhost:8080/admin'));