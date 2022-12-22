const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Catalog = new Schema({
    catalog_position: { type: Number, maxLength: 255 },
    catalog_img: { type: String, maxLength: 255 },
    catalog_data: { type: String, maxLength: 255 },

    catalog_blank: { type: String, maxLength: 255 },
    catalog_contents: { type: String, maxLength: 255},
    catalog_contents_title: { type: String, maxLength: 255 },
    catalog_contents_from: { type: String, maxLength: 255 },
    catalog_contents_detail: { type: String, maxLength: 255 },

    catalog_id: { type: String, maxLength: 255 },
    catalog_name: { type: String, maxLength: 255 },
    catalog_benefit: { type: String, maxLength: 600 },
    catalog_harvest: { type: String, maxLength: 600 },
    catalog_original: { type: String, maxLength: 600 },
    catalog_detail: { type: String, maxLength: 800 },
    catalog_img_detail: { type: String, maxLength: 600 },
});

module.exports = mongoose.model('Catalog', Catalog);