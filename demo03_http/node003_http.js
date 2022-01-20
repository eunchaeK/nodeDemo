const http = require('http');
const fs = require('fs');   //파일 사용 시 필요한 모듈 import 

//http 모듈을 이용한 웹 Server 생성
const app = http.createServer((req, res)=>{
    
    res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
    
    
    //console.log(req.url);
    res.write('<!DOCTYPE html>');
    res.write('<html lang="ko">');
    res.write('<head>');
    res.write('<meta charset="UTF-8">');

    res.write('<title>응답페이지</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>my home page</h1>');

    res.write('</body>');
    res.write('</html>');
    res.end();
    
});

const port = 3000;
const host = '127.0.0.1';
//listen() : 클라이언트 요청을 대기 
app.listen(port, host, ()=>{
    console.log('Server starts : %s  %d',host, port);
});
