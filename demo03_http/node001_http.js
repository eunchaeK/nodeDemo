const http = require('http');

//http 모듈을 이용한 웹 Server 생성
const app = http.createServer((req, res)=>{
    //console.log(req.url);

    res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
    if(req.url=='/'){
        res.end('여기는 루트입니다.');
    }else if(req.url=='/login'){
        res.end('로그인입니다.');
    }else if(req.url=='/member'){
        res.end('회원정보입니다.');
    }
});

const port = 3000;
const host = '127.0.0.1';
//listen() : 클라이언트 요청을 대기 
app.listen(port,host, ()=>{
    console.log('Server starts : %s  %d',host, port);
});
