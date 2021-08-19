const Product = require('./models/product')
const {products} = require('./products')
const mongoose = require('mongoose')


const importData = async() =>{
    await Product.deleteMany({})
    await Product.insertMany(products)
    process.exit();
}

importData();

