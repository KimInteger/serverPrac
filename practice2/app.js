const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const PORT = 3000;

const server = http.createServer((req,res)=>{
  if (req.method === 'GET') {
    if (req.url === '/') {
      fs.readFile('./public/index.html', (err,data)=>{
        if(err){
          res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
          res.end("서버 연결 오류");
          return;
        }
        res.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
        res.end(data);
      });
    } else if (req.url.startsWith('/get')) {
      let data = req.url.split('?')[1];
      console.log(data);
    } else {

    }
  } else if (req.method === 'POST') {

  } else {

  }
});

server.listen(PORT,(err)=>{
  if(err){
    console.error(err);
  }
  console.log('서버 가동 중입니다.');
  console.log(`http://localhost:${PORT}`);
});

