"use strict";

var _require = require('mongoose'),
    model = _require.model;

var Workshop = model('Workshop', {
  workshop_name: {
    type: String
  },
  workshop_detail: {
    type: String
  },
  workshop_date: {
    type: String
  },
  workshop_time: {
    type: String
  }
});
module.exports = Workshop;