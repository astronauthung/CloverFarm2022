const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema ({
    // contact_id: { type: String, maxLength: 255 },
    contact_name: { type: String, maxLength: 255 },
    contact_problem: { type: String, maxLength: 600 },
    contact_mail: { type: String, maxLength: 600 },
    // contact_date: { type: String, maxLength: 600 },
});

module.exports = mongoose.model('Contact', Contact);