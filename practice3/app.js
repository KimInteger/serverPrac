const http = require("node:http");

const fs = require('node:fs');

const qs = require('node:querystring');

const path = require('node:path');

const server = http.createServer((req,res)=>{
  if(req.method === 'GET'){
    if (req.url === '/') {
      fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>{
        if (err) {
          res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
          res.end("서버 자체 에러");
          return;
        } else {
          res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"});
          res.end(data);
        }
      });
    } else if (req.url.startsWith('/get')) {
      let getData = req.url.split('?')[1];
      let decodeData = qs.decode(getData);

      let jsonData = {
        name : decodeData.name,
        hobby : decodeData.hobby
      };

      fs.writeFile(path.join(__dirname,'public',`${decodeData.name}.txt`),JSON.stringify(jsonData,null,2),(err)=>{
        if (err) {
          console.error(err);
        } else {
          fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>{
            if (err) {
              res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
              res.end("서버 자체 에러");
              return;
            } else {
              res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"});
              res.end(data);
            }
          });
        }
      })
    } else {
      res.writeHead(404,{"Content-Type":"text/plain;charset=UTF-8"});
      res.end('페이지를 찾을 수 없습니다.');  
    }
  } else if (req.method = 'POST') {
    if (req.url === '/post') {
      let body = '';
      req.on('data',(chunk)=>{
        body += chunk.toString();
      });
      req.on('end',()=>{
        const parseData = qs.parse(body);
        
        fs.writeFile(path.join(__dirname,'public',`${parseData.name}.txt`), parseData.hobby, (err)=>{
          if (err) {
            console.error(err);
          } else {
            fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>{
              if (err) {
                res.writeHead(500,{"Content-Type":"text/plain; charset=UTF-8"});
                res.end("서버 자체 에러");
                return;
              } else {
                res.writeHead(200,{"Content-Type":"text/html; charset=UTF-8"});
                res.end(data);
              }
            });
          }
        })
      });
    } else {
      res.writeHead(404,{"Content-Type":"text/plain;charset=UTF-8"});
      res.end('페이지를 찾을 수 없습니다.');  
    }
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