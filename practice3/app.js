const http = require("node:http");

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const server = http.createServer((req,res)=>{
  if(req.method === 'GET'){

  } else if (req.method = 'POST') {

  } else {
    res.writeHead(404,{"Content-Type":"text/plain;charset=UTF-8"});
    res.end('페이지를 찾을 수 없습니다.');
  }
});

server.listen(3000,(err)=>{
  if(err){
    console.error(err);
  } else {
    console.log("서버가 잘 열려있습니다.");
    console.log(`http://localhost:3000`);
  }
});