const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    
    if(req.url=="/about"){
        fs.readFile("about.html",(err,data)=>{
            if(err){
                res.end(err);
            }
            else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(data);
            }
        })
    }
    else if(req.url == "/contact"){

        fs.readFile("contact.html",(err,data)=>{
            if(err){
                res.end(err);
            }
            else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(data);
            }
        })
    }
    // else if(req.url=="/name"){
        
    //     res.end("hello krish")

    // }
    else if(req.url == "/home"){

        fs.readFile("home.html",(err,data)=>{
            if(err){
                res.end(err);
            }
            else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(data);
            }
        })
    }
    else{
           
        fs.readFile("webdemo.html",(err,data)=>{
            if(err){
                res.end(err);
            }
            else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(data);
            }
        })
    }
});

server.listen(4020,()=>{
    console.log('server is running on port 4020');
    });