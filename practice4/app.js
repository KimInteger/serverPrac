const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const PORT = process.env.PORT || 8080;

function notFound(res){
  
}


const server = http.createServer((req,res)=>{
  if (req.method === 'GET') {

  } else if (req.method === 'POST') {

  } else {

  }
});

server.listen(PORT,(err)=>{
  if (err) {
    console.error('에러가 발생했당께요 : ', err);
  } else {
    console.log("서버가 열렸도르");
    console.log(`http://localhost:${PORT}`);
  }
})