const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    brand:{type:String, required:true},
    category:{type:String, required:true},
    image:{type:String, required:true},
    discount:{type:Number, required:true},
    discountType:{type:String, required:true},
    off:{type:Boolean , required:false, default:true},
},{
    versionKey:false,
    timestamps:true
})

const product = mongoose.model("product",productSchema)

module.exports = product  