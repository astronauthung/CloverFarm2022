"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Contact = new Schema({
  // contact_id: { type: String, maxLength: 255 },
  contact_name: {
    type: String,
    maxLength: 255
  },
  contact_problem: {
    type: String,
    maxLength: 600
  },
  contact_mail: {
    type: String,
    maxLength: 600
  } // contact_date: { type: String, maxLength: 600 },

});
module.exports = mongoose.model('Contact', Contact);