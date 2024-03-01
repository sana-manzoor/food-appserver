//import user model
const fooditems = require('../Models/foodSchema')
// const jwt = require('jsonwebtoken')



exports.addFooditems = async (req, res) => {
    console.log("Inside addfooditems Function!!")
    console.log(req.file.filename)
    const { title, price, category, description, userId} = req.body
    console.log(`${title},${price},${category},${description},${userId}`)
     const food_image=req.file.filename
    //  res.send("addfooditems request is hit!!")
    try{
        const excistingFood=await fooditems.findOne({description})
        if(excistingFood){
            res.status(406).json("Excisting Food")
        }
        else{
            const newFooditem=new fooditems({title,price,category,description,food_image,userId})
            await newFooditem.save()
            res.status(200).json(newFooditem)
        }
    }
    catch(err){
        res.status(401).json("Something Went Wrong!! " + err)
    }
}



exports.adminFoods = async (req, res) => {
    console.log("Inside admin foods")
    // res.send("adminfoods")
    console.log(req.payload)
    try {
        const data = await fooditems.find({ userId: req.payload })
        console.log(data)
        res.status(200).json(data)

    }
    catch (err) {
        res.status(401).json(err)
    }
}

exports.homeFoods = async (req, res) => {
    console.log("Inside Home foods")
    try {
        const data = await fooditems.find().limit(4)
        console.log(data)
        res.status(200).json(data)
    }
    catch (err) {
        res.status(401).json(err)
    }
}



exports.allFood = async (req, res) => {
    console.log("Inside allfoods")
   const searchKey=req.query.search
  console.log(req.query)
    const query={
        title:{$regex:searchKey,$options:"i"}
        //  category:{$regex:searchKey,$options:"i"}

    }
    try {
     const data = await fooditems.find(query)

        console.log(data)
        res.status(200).json(data)
    }
    catch (err) {
        res.status(401).json(err)
    }
 }


 exports.editFood = async (req, res) => {
    const userId=req.payload
    const {title,price,category,description}=req.body
    const uploadedFile=req.file?req.file.filename:req.body.food_image
    const {id}=req.params
    try{
      console.log("inside edit")
      const result=await fooditems.findByIdAndUpdate({_id:id},{title,price,category,description,food_image:uploadedFile,userId})
      console.log(result)
      res.status(200).json(result)
    }
    catch(err){
        console.log(err)
      res.status(401).json(err)
    }
    //  res.send(`${title},${price},${uploadedFile},${id}`)
  }


  exports.deleteFood = async (req,res)=>{
    const {id}=req.params
    try{
        console.log("inside delete")
        const result=await fooditems.findByIdAndDelete({_id:id})
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }

}


exports.getCategory = async (req, res) => {
    console.log("Inside allfoods")
    const searchKey=req.query.search
   console.log(req.query)
   const query={
    category:{$regex:searchKey,$options:"i"}

   }
        try {
      const data = await fooditems.find(query)
 
         console.log(data)
         res.status(200).json(data)
     }
     catch (err) {
         res.status(401).json(err)
     }
}


