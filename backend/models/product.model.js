const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    tag: { type: String, required: true },
    product_img: { type: String, required: true },
    offer: { type: String, required: true },
    percentage: { type: String, required: true },
},{
    versionKey:false,
})

const product = mongoose.model("product",productSchema)

module.exports = product  