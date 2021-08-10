const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Product = require('./models/product')
const app = express()


app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/biyahspecials?readPreference=primary&appname=MongoDB%20Compass&ssl=false",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.listen(4000,() =>{
    console.log("server running on port 4000")
})



app.get('/products' , async(req,res)=>{
    const products =  await Product.find({})
   res.json(products)
} )

app.get("/product/:id" ,async(req,res) =>{
        const product = await Product.find({id: req.params.id})
        res.json(product)
})