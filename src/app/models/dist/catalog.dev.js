"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Catalog = new Schema({
  catalog_id: {
    type: String,
    maxLength: 255
  },
  catalog_name: {
    type: String,
    maxLength: 255
  },
  catalog_benefit: {
    type: String,
    maxLength: 600
  },
  catalog_harvest: {
    type: String,
    maxLength: 600
  },
  catalog_original: {
    type: String,
    maxLength: 600
  },
  catalog_detail: {
    type: String,
    maxLength: 800
  },
  catalog_img_detail: {
    type: String,
    maxLength: 600
  }
});
module.exports = mongoose.model('Catalog', Catalog);