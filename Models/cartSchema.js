//import mongoose
const mongoose = require('mongoose')
// const validators = require('validator')

const cartSchema=new mongoose.Schema({
    title:{
    type:String,
    // required:true
    },
    price:{
        type:String,
        // required:true

    },
    quantity:{
        type:String,
        // required:true 
    },
    total:{
        type:String,
        // required:true
    },
    userId:{
        type:String,
        // required:true
    },
    itemId:{
        
            type:String,
            // required:true
    }


})

const cartitems=mongoose.model('cartitems',cartSchema)
module.exports=cartitems