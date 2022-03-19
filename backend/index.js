const express = require("express")

const app = express()

const productController = require("./controllers/product.controller")

const cors = require("cors")

app.use(cors())

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Working Backend")
})

app.use("/product",productController)

module.exports = app