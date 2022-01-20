"use strict";

const express = require('express');
//router 객체 생성 
const router = express.Router();

router.get('/',(req,res)=>{
    //뷰 엔진을 사용해 문서를 만든 후 전송
    res.render('home/index');
});

router.get('/login', (req,res)=>{
    res.render('home/login');
});

//외부로 내보내줌 
module.exports = router;