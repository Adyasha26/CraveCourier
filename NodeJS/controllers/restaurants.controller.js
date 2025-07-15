const restaurantModel=require("../model/restaurants.model");
exports.create=(req,res)=>{
    const{name,avgRating,cuisines,cloudinaryImageId,costForTwoString,deliveryTime,menuItems}=req.body;

    const newRestaurant=new restaurantModel({
         name,
         avgRating,
         cloudinaryImageId,
         cuisines,
         costForTwoString,
         deliveryTime,
         menuItems,
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

//fetch all the restaurants
exports.fetch=(req,res)=>{
    restaurantModel
    .find()
    .then((data)=>{
        if(!data){
            res.status(404).json({message:"Data not found"})
        }
        res.send(data);
    }).catch((err)=>res.status(500).json({message:"Server not available"}));
};

//fetch only 1 restaurants based on id

exports.fetchOne=(req,res)=>{
    const _id=req.params.id;
console.log("_id"+_id);
    restaurantModel
    .find({ _id: _id})
    .then((data)=> {
        if(!data){
           res.status(404).json({message:"Data not found"});
        }
        res.send(data);

    })
    .catch((err)=>res.status(500).json({message:"Server not available"}));

};




//update only 1 restaurants based on id

exports.updateOne=(req,res)=>{
    const _id=req.params.id;

    restaurantModel
    .findByIdAndUpdate(_id,req.body, { new: true })
    .then((data)=> {
        if(!data){
           res.status(404).json({message:"Data not found"});
        }
        res.send(data);

    })
    .catch((err)=>res.status(500).json({message:"Server not available"}));

};

//for deleteion
exports.delete=(req,res)=>{
    const _id=req.params.id;

    restaurantModel
    .findByIdAndDelete(_id)
    .then((data)=> {
        if(!data){
           res.status(404).json({message:"Data not found"});
        }
        res.send(data);

    })
    .catch((err)=>res.status(500).json({message:"Server not available"}));

};