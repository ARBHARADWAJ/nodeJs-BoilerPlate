//Jai shree Ram
const express=require("express");

const app=express();

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Api connected and running");
});


app.listen(3000,()=>{
    console.log("server is running in port 3000");
})