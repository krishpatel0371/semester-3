const express = require("express");
const path = require("path")
const app = express();


app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
});
app.post("/",(req,res)=>{
    res.send("<h1>Hello World post</h1>");
});

app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"home.html"));
});
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"about.html"));
});
app.get("/help",(req,res)=>{
    res.sendFile(
        path.join(__dirname,"help.html"));
});
app.get("/abc",(req,res)=>{
    res.sendFile(path.join(__dirname,"abc.html"));
});

app.get("/user/:name",(req,res)=>{
        const myname=req.params.name;
        res.send(`hello world from ${myname}`);
});



app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});