const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors")

const app=express();

app.use(cors()); 
//Built in middle-ware
app.use(bodyParser.json());
//application level middle-ware
app.use(loggedInUserRequest);

mongoose.connect(
    "mongodb+srv://awaghmare2:1234567890@cluster0.se8pbpn.mongodb.net/"
);

const db=mongoose.connection;
db.on("error",()=>{
    console.log("connection not successful");
});
db.on("open",()=>{
    console.log("connection is successful");
});

app.listen("5000",()=>{
    console.log("server is running on port 5000");
})

app.get("/",(req,res)=>{
    res.send("user request");
});

function loggedInUserRequest(req,res,next){
    console.log("user has initiated request");
    next();
}

require("./routes/restaurants.routes")(app);
require("./routes/users.routes")(app);