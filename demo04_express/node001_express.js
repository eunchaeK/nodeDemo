//Error: Cannot find module 'express'

//express 모듈은 외부모듈 -> 설치 필요 (local 설치 시 프로젝트 생성할 때마다 설치)
// npm install express --save
//npm init
//npm init -y : 기본값만 주기 
const express = require('express');


const app = express();

app.get('/',(req,res)=>{
    res.send('여기는 루트입니다.');
});

app.get('/login',(req,res)=>{
    res.send('여기는 로그인입니다.');
});

app.get('/member',(req,res)=>{
    res.send('여기는 회원정보입니다.');
});

const port = 3000;
const host = '127.0.0.1';
//listen() : 클라이언트 요청을 대기 
app.listen(port,host, ()=>{
    console.log('Server starts : %s  %d',host, port);
});
