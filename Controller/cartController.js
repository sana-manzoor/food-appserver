const cartitems=require('../Models/cartSchema')


exports.addtoCart=async (req, res) => {
    console.log("Inside addtocart Function!!")
    // console.log(req.file.filename)
    const { title, quantity, price, total, userId,itemId} = req.body
    console.log(`${title},${quantity},${price},${total},${userId},${itemId}`)
    //  const food_image=req.file.filename
    //  res.send("addtocart request is hit!!")
    // try{
    //     const excistingFood=await fooditems.findOne({description})
    //     if(excistingFood){
    //         res.status(406).json("Excisting Food")
    //     }
    //     else{
    //         const newFooditem=new fooditems({title,price,category,description,food_image,userId})
    //         await newFooditem.save()
    //         res.status(200).json(newFooditem)
    //     }
    // }
    // catch(err){
    //     res.status(401).json("Something Went Wrong!! " + err)
    // }
    try{
       
            const cartItem=new cartitems({title,quantity,price,total,userId,itemId})
            await cartItem.save()
            res.status(200).json(cartItem)
        
    }
    catch(err){
        res.status(401).json("Something Went Wrong!! " + err)
    }
}