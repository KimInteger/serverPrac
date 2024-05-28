const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const PORT = 3000;

const server = http.createServer((req,res)=>{
  console.log(1);
});

server.listen(PORT,(err)=>{
  if(err){
    console.error(err);
  }
  console.log('서버 가동 중입니다.');
  console.log(`http://localhost:${PORT}`);
});

