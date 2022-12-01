const express = require('express');
const mongoose = require('mongoose');
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');

const connectDb = require('./config/database/index');
const workshop = require('./app/models/workshop');
const catalog = require('./app/models/catalog');
// const contact = require('./app/models/contact');

const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/contact', (req, res) => {
//     let contact = new Contact({
//       contact_name: req.body.contact_name,
//       contact_problem: req.body.contact_problem,
//       contact_mail: req.body.contact_mail,
//     });
//     contact.save();
// });

const PORT = 9999;
const catalogOption = {
  resource: catalog,
}

const workshopOption = {
  resource: workshop,
}

// const contactOption = {
//   resource: contact,
// }

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

app.listen(PORT, () => console.log('AdminJS is under localhost:'+PORT+'/admin'));