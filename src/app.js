const express = require('express');
const Connect = require('connect-pg-simple');
const session = require('express-session');
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
const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
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

const ConnectSession = Connect(session)
// const sessionStore = new ConnectSession({
//     conObject: {
//       connectionString: 'http://localhost:9999/admin',
//       ssl: process.env.NODE_ENV === 'production',
//     },
//     tableName: 'session',
//     createTableIfMissing: true,
//   })

// const adminJSRouter = AdminJSExpress.buildRouter(adminJS);
const adminJSRouter = AdminJSExpress.buildAuthenticatedRouter(adminJS, {
  authenticate,
  cookieName: 'adminjs',
  cookiePassword: 'somepassword'}
  , null, {
    resave: true,
    saveUninitialized: true,
    secret: 'somepassword',
    cookie: {
      httpOnly: process.env.NODE_ENV === 'production',
      secure: process.env.NODE_ENV === 'production',
    },
    name: 'adminjs',
  }
);
  

// mount adminJS route and run express app
const app = express();
app.use(adminJS.options.rootPath, adminJSRouter);
app.use(express.static(path.join(__dirname, 'public')));

connectDb.connect();

app.listen(PORT, () => console.log('Admin is under http://localhost:'+PORT+'/admin'));

