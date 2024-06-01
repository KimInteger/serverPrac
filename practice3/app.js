const http = require("node:http");

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const server = http.createServer((req,res)=>{
  console.log('서버확인');
});

server.listen(3000,(err)=>{
  if(err){
    console.error(err);
  } else {
    console.log("서버가 잘 열려있습니다.");
    console.log(`http://localhost:3000`);
  }
});