const express = require("express")

const app = express()

const productController = require("./controllers/product.controller")

const cors = require("cors")


app.get("/",(req,res)=>{
    res.send("Working Backend")
})

app.use("/product",productController)

module.exports = app