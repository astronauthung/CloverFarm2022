const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Workshop_registration = new Schema({
    firstname: { type: String, maxLength: 255 },
    lastname: { type: String, maxLength: 255 },
    birthday: { type: Date },
    gender: { type: String, maxLength: 600 },
    email: { type: String, maxLength: 600 },
    phone_number: { type: String, maxLength: 600 },
});

module.exports = mongoose.model('Workshop_registration', Workshop_registration);