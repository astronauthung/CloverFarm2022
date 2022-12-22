const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Collection = new Schema({
    collection_id: { type: String, maxLength: 255 },
    collection_name: { type: String, maxLength: 255 },
    collection_img: { type: String, maxLength: 255 },
    collection_author: { type: String, maxLength: 255 },
    collection_date: { type: String, maxLength: 255 },
    collection_description: { type: String, maxLength: 255 },
});

module.exports = mongoose.model('Collection', Collection);