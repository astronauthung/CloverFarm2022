const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    product_name: { type: String, maxLength: 255 },
    product_detail: { type: String, maxLength: 600 },
    product_img: { type: String, maxLength: 600 },
});

module.exports = mongoose.model('Product', Product);