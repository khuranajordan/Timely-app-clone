const express=require("express");
const port=8080;
const mongooseConnect=require("./mongooseConnection/mongooseConnection.js")
const app=express();

app.use(express.json());









mongooseConnect
.then(()=>{
    app.listen(port,()=>{
        console.log(`server started`);
        console.log(`data base connected`);
    })
})
.catch((error)=>{
    console.log(error.message)
})