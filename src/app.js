const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');

const connectDb = require('./config/database/index');
const workshop = require('./app/models/workshop');
const catalog = require('./app/models/catalog');
const contact = require('./app/models/contact');
const workshop_reg = require('./app/models/workshop_reg');

const bodyParser = require('body-parser');


const PORT = 9999;
const catalogOption = {
  resource: catalog,
}

const workshopOption = {
  resource: workshop,
}

const contactOption = {
  resource: contact,
}
const workshop_regOption = {
  resource: workshop_reg,
}



AdminJS.registerAdapter(AdminJSMongoose);

// init adminJS
const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [workshopOption, catalogOption, contactOption, workshop_regOption],

    assets: {
      styles: ["/css/admin.css"],
    }
});
const adminJSRouter = AdminJSExpress.buildRouter(adminJS);

// mount adminJS route and run express app
const app = express();
app.use(adminJS.options.rootPath, adminJSRouter);
app.use(express.static(path.join(__dirname, 'public')));

connectDb.connect();

app.listen(PORT, () => console.log('AdminJS is under http://localhost:'+PORT+'/admin'));

