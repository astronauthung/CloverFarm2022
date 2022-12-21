const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema ({
    contact_name: { type: String },
    contact_problem: { type: String },
    contact_mail: { type: String},
});

module.exports = mongoose.model('Contact', Contact);