const restaurantModel=require("../model/restaurants.model");
exports.create=(req,res)=>{
    const{name,avgRating,cuisines,cloudinaryImageId,costForTwoString}=req.body;

    const newRestaurant=new restaurantModel({
         name,
         avgRating,
         cloudinaryImageId,
         cuisines,
         costForTwoString,
    });
    newRestaurant
    .save()
    .then((data)=> {
        if(!data){
           res.status(400).send("Something went wrong");
        }
        res.send(data);

    })
    .catch((err)=>res.status(500).json({message:"Server not available"}));
};