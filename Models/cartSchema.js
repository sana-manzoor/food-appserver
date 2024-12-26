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
    food_image:{
        type:String
    },
    total:{
        type:String,
        // required:true
    },
    uid:{
        type:String,
        // required:true
    },
    pid:{
        
            type:String,
            // required:true
    }


})

const carts=mongoose.model('carts',cartSchema)
module.exports=carts