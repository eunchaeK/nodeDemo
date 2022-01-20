const express = require('express');


const app = express();

app.get('/',(req,res)=>{
    res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <p>여기는 루트입니다.</p>
    </body>
    </html>
    `);
});

app.get('/login',(req,res)=>{
    // ` `(백틱)에 넣기 
    res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <p><input type="text" placeholder="아이디"></p>
        <p><input type="text" placeholder="비밀번호"></p>
        <p><input type="submit" value="로그인"></p>
    </body>
    </html>
    `);
});


//클라이언트 요청 대기 
const port = 3000;
const host = '127.0.0.1';
//listen() : 클라이언트 요청을 대기 
app.listen(port,host, ()=>{
    console.log('Server starts : %s  %d',host, port);
});
