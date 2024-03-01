//import express
const express=require('express')


//import controller function to resolve requests
const usercontroller=require('../Controller/userController')
const foodController=require('../Controller/foodController')
const cartController=require('../Controller/cartController')



//multer import
const multerConfig=require('../Middlewares/foodMiddleware')
const jwtMiddleware=require('../Middlewares/jwtMiddleware')
// const multer = require('multer')


//create object for router class in express
const router=new express.Router()


//define various paths
router.post('/user/register',usercontroller.register)
router.post('/user/login',usercontroller.login)
router.post('/admin/addfood',jwtMiddleware,multerConfig.single('food_image'),foodController.addFooditems)
router.get('/admin/foodlist',jwtMiddleware,foodController.adminFoods)
router.get('/user/userslist',usercontroller.usersList)
router.get('/home/food',foodController.homeFoods)
router.get('/user/food',foodController.allFood)
router.put('/admin/editFood/:id',jwtMiddleware,multerConfig.single('food_image'),foodController.editFood)
router.delete('/admin/deletefood/:id',jwtMiddleware,foodController.deleteFood)
router.delete('/admin/deleteuser/:id',jwtMiddleware,usercontroller.deleteUser)
router.post('/user/addtocart',cartController.addtoCart)
router.get('/admin/getcategory',foodController.getCategory)








module.exports=router