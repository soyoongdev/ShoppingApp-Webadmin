const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    id: {type: ObjectId},
    productName: { type: String },
    price: { type: Number },
    date: { type: Date },
    saleUpTo: { type: Number },
    idLoaiSP: { type: Schema.Types.ObjectId, ref: 'Category' },
    imgProduct: { type: String }
    
})

module.exports = mongoose.model('Product', productSchema)