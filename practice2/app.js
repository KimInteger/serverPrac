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
      const parsedData = qs.parse(data);

      const jsonData = {
        name : parsedData.Gname,
        hobby : parsedData.Ghobby
      }

      fs.writeFile(path.join(__dirname,'writeFile',`${parsedData.Gname}.txt`),JSON.stringify(jsonData,null,2),(err)=>{
        if(err){
          console.error(err);
        }
      });

      const file = fs.readFileSync('./public/index.html','utf8');

      res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"});
      res.end(file);
    } else {
      res.writeHead(404,{"Content-Type":"text/plain;charset=UTF-8"});
      res.end('페이지를 찾을 수 없습니다.');
    }
  } else if (req.method === 'POST') {
    if (req.url === '/post') {
      let body = '';
      req.on('data',(chunk)=>{
        body += chunk.toString();
      });
      req.on('end',()=>{
        const parseData = qs.parse(body);
        console.log(parseData);
        // post형식으로 받아옴을 확인.
        fs.writeFile(path.join(__dirname,'writeFile',`${parseData.name}.txt`),parseData.hobby,(err)=>{
          if (err) {
            console.error(err);
          }
        });
        res.writeHead(200,{"Content-Type":"text/plain; charset=UTF-8"});
        res.end(`${parseData.name}데이터를 감지했도다!`);
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

server.listen(PORT,(err)=>{
  if(err){
    console.error(err);
  }
  console.log('서버 가동 중입니다.');
  console.log(`http://localhost:${PORT}`);
});

