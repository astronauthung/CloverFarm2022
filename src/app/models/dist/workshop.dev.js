"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Workshop = new Schema({
  workshop_id: {
    type: String,
    maxLength: 255
  },
  workshop_name: {
    type: String,
    maxLength: 255
  },
  workshop_detail: {
    type: String,
    maxLength: 800
  },
  workshop_address: {
    type: String,
    maxLength: 600
  },
  workshop_active: {
    type: String,
    maxLength: 600
  },
  workshop_date: {
    type: String,
    maxLength: 600
  },
  workshop_img: {
    type: String,
    maxLength: 600
  }
});
module.exports = mongoose.model('Workshop', Workshop);