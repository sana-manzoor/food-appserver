//import mongoose
const mongoose = require('mongoose')
const validators = require('validator')

const foodSchema=new mongoose.Schema({
    title:{
    type:String,
    required:true
    },
    price:{
        type:String,
        required:true

    },
    category:{
        type:String,
        required:true 
    },
    description:{
        type:String,
        required:true
    },
    food_image:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,

    },
    total:{
        type:Number,
       
    }
})

const fooditems=mongoose.model('fooditems',foodSchema)
module.exports=fooditems