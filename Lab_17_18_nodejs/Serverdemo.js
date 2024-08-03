const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('hello krish.how are you ?');
    });
    server.listen(4550,()=>{
        console.log('server is running on port 4550');
        });
