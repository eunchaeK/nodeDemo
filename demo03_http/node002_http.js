const http = require('http');

//웹 서버 생성 
const app = http.createServer();

//클라이언트 요청 대기 
const port = 3000;
const host = '127.0.0.1';
//listen() : 클라이언트 요청을 대기 
app.listen(3000,host, ()=>{
    console.log('Server starts : %s  %d',host, port);
});

//클라이언트 연결 이벤트 처리
app.on('connection',(socket)=>{
    const addr = socket.address();
    console.log('client : %s %d', addr.address, addr.port);
});

app.on('request', (req, res) => {
    res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
    if(req.url=='/'){
        res.end('여기는 루트입니다.');
    }else if(req.url=='/login'){
        res.end('로그인입니다.');
    }else if(req.url=='/member'){
        res.end('회원정보입니다.');
    }else if(req.url=='/join'){
        res.end('회원가입창입니다.');
    }
});

//서버 종료 이벤트 처리 
app.on('close', ()=>{
    console.log('server end');
});