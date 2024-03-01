// to get env file while server is running,import dotenv
require('dotenv').config()

//import express.js
const express=require('express')


//import cors
const cors=require('cors')

//create express server
const faServer=express()

//implementing cors to server
faServer.use(cors())

//parsing json data using server app
faServer.use(express.json())

//import router
const router=require('./Routes/routes')


//import connection.js
require('./dbConnection/connection')


//import middleware
const middleware=require('./Middlewares/userMiddleware')
// const middleware=require('./Middlewares/foodMiddleware')

faServer.use(middleware)


//use router to server
faServer.use(router)


//port numver configuration
const PORT=3000 || process.env.PORT



//serving upload files
faServer.use('/upload',express.static('./uploads'))




//to run server
faServer.listen(PORT,()=>{
    console.log(`Server is started at ${PORT}`)
})

//resolve request to localhost:400
faServer.get('/',(req,res)=>{
    res.send("<h1>Server is running successfully</h1>")
})

faServer.post('/',(req,res)=>{
    res.send("<h1>Post Request Is successful</h1>")
})
