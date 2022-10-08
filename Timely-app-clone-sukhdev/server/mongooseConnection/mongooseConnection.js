const mongoose=require("mongoose");
const uri="mongodb://127.0.0.1:27017/u-7";



const mongooseConnect=mongoose.connect(uri);






module.exports=mongooseConnect