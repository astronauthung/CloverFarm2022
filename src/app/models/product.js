const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchem = new Schema({
    product_name: { type: String, maxLength: 255 },
    product_detail: { type: String, maxLength: 600 },
    product_img: { type: String, maxLength: 600 },
});
const CollectionSchem = new Schema({
    collection_id: { type: String, maxLength: 255 },
    collection_name: { type: String, maxLength: 255 },
    collection_img: { type: String, maxLength: 255 },
    collection_author: { type: String, maxLength: 255 },
    collection_date: { type: String, maxLength: 255 },
    collection_description: { type: String, maxLength: 255 },
});
const Product = mongoose.model('Product', ProductSchem);
const Collection = mongoose.model('Collection', CollectionSchem);

module.exports = { Product, Collection };