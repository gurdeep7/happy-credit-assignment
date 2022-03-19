const express = require("express")

const product = require("../models/product.model")
const router = express.Router()

router.post("",async(req,res)=>{
    try {
         const Product =await product.create(req.body)
 
     res.status(200).send(Product)
 }catch(e){
 
     res.status(500).json({status:e.message})
 }
 })

 router.get("",async(req,res)=>{
    try{
        const Products =await product.find().lean().exec()
        res.status(201).send(Products)
    }catch(e){
        res.status(500).json({status:e.message})
    }
})

module.exports = router