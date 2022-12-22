"use strict";

var moongose = require('moongose');

var Schema = moongose.Schema;
var Category = new Schema({
  category_id: {
    type: String,
    maxLength: 255
  },
  category_name: {
    type: String,
    maxLength: 255
  },
  category_img: {
    type: String,
    maxLength: 255
  },
  category_description: {
    type: String,
    maxLength: 255
  }
});