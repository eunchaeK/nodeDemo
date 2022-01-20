// https://expressjs.com/ko/guide/routing.html
// https://developer.mozilla.org/ko/docs/Learn/Server-side/Express_Nodejs/Introduction

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const indexRouter = require('./routers/index');
const memberRouter = require('./routers/member');

const app = express();

// interceptor처럼 요청하는 페이지 전에 use가 먼저 수행됨.
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/ejs'));
app.set('layout', 'common/layout');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', indexRouter);
app.use('/member', memberRouter);

const port = 3000;
app.listen(port, ()=>{
    console.log('Server starts port : %d', port);
});
