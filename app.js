
import * as AdminJSMongoose from '@adminjs/mongoose'
import {Workshop} from './models/workshop.model.js'

const AdminJS = require('adminjs')
const mongoose = require('mongoose');
const AdminJSExpress = require('@adminjs/express')
const express = require('express')


AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
  })

const PORT = 9999

const start = async () => {
  const app = express()

  await mongoose.connect('mongodb+srv://PhucHung:phuchungoccho@cloverfarm2022.4ihfbuf.mongodb.net/test')

  const adminOptions = {
    
    resources: [Workshop],
  }
  const admin = new AdminJS({
  })

  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()