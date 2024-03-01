//import mongoose
const mongoose = require('mongoose')
const validators = require('validator')


//define schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validators.isEmail, 'Invalid Email']


    },

    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default:false
    // },
    // cart:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'fooditems'
    // }]
    }

})

const users = mongoose.model('users', userSchema)

module.exports = users