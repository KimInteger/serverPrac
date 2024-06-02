const http = require('node:http');

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const PORT = process.env.PORT || 8080;

function notFound(res){
  res.writeHead(404,{"Content-Type" : "text/plain; charset=UTF-8"});
  res.end("페이지를 찾을 수 없습니다.");
}


const server = http.createServer((req,res)=>{
  if (req.method === 'GET') {
    if (req.url === '/') {
      fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>{
        
      });
    } else if (req.url.startsWith('/get')) {

    } else {
      notFound(res);
    }
  } else if (req.method === 'POST') {
    if (req.url === '/post') {

    } else {
      notFound(res);
    }
  } else {
    notFound(res);
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