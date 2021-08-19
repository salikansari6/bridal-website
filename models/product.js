const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    id:{
        type: Number
    },
    name:{
        type: String
    },
    price:{
        type:Number
    },
    fabric:{
        type:String
    },
    style:{
        type:String
    },
    color:{
        type:String
    },
    size:{
        type:String
    },
    imageURL:{
        type:Array
    }
    
})


const Product = mongoose.model('product' ,productSchema)

module.exports = Product