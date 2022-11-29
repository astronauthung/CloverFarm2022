
const AdminJS = require('adminjs')
const mongoose = require('mongoose');
const AdminJSExpress = require('@adminjs/express')
const express = require('express')

const PORT = 9999

const start = async () => {
  const app = express()

  await mongoose.connect('mongodb+srv://PhucHung:phuchungoccho@cloverfarm2022.4ihfbuf.mongodb.net/test')

  const admin = new AdminJS({
  })

  const adminRouter = AdminJSExpress.buildRouter(admin)
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()