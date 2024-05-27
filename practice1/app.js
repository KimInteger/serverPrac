const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const server = http.createServer((req,res)=>{
  console.log(req.method);
});

const PORT = 3000;

server.listen(3000,(err)=>{
  if(err){
    console.error(err);
  }
  console.log("서버가동확인용");
  console.log('http://localhost:3000');
})