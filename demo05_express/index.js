"use strict";

//ejs 설치 : npm install ejs --save

const express = require('express');
const app = express();
//const router = express.Router();

//뷰의 위치 지정 (왼쪽 값은 변경 x)
app.set('views', './views');

//view engine 세팅(ejs로 세팅>설치필요)
app.set('view engine', 'ejs');



// 라우터 위치 지정 
const home = require('./routes/home/server');

//use() : 미들웨어를 등록해주는 메소드 (router 사용 시)
app.use("/", home);



app.get('/',(req,res)=>{
    //뷰 엔진을 사용해 문서를 만든 후 전송
    res.render('home/index');
});

app.get('/login', (req,res)=>{
    res.render('home/login');
});



//클라이언트 요청 대기 
const port = 3000;
const host = '127.0.0.1';
//listen() : 클라이언트 요청을 대기 
app.listen(port,host, ()=>{
    console.log('Server starts : %s  %d',host, port);
});