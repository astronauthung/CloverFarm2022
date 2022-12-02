const mongoose = require('mongoose');

async function connect() {
    try {
      await mongoose.connect("mongodb+srv://DuyHoang:duybroso1@cloverfarm2022.4ihfbuf.mongodb.net/CloverFarm", { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("Connected to mongodb");
    } catch (error) {
      console.log("failed to connect to mongodb");
    }
  }

module.exports = { connect };