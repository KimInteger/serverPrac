const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const server = http.createServer((req,res)=>{
  if(req.method === 'GET'){
    if(req.url === '/'){
      fs.readFile('./public/index.html', (err,data)=>{
        if(err){
          res.writeHead(500, {"Content-Type":"text/plain; charset=UTF-8"});
          res.end('서버 연결 오류');
        }
        res.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
        res.end(data);
      });
    } else if (req.url.startsWith('/get')) {

    } else {
      res.writeHead(404, {"Content-Type":"text/plain; charset=UTF-8"});
    }
  }
});

const PORT = 3000;

server.listen(PORT,(err)=>{
  if(err){
    console.error(err);
  }
  console.log("서버가동확인용");
  console.log(`http://localhost:${PORT}`);
})