const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'mydb',
    port:3306,
    debug:false
});

conn.connect((err)=>{
    if(err)
        throw err;
    else 
        console.log('Database connect completed');
});

// 로그인
router.get('/loginForm', (req,res)=>{
    res.render('member/loginForm.ejs');
});

router.post('/login', (req,res)=>{

    
});



// ---------------------------------------------------------------------------
router.get('/listMembers', (req, res)=>{
    conn.query('SELECT * FROM t_member ORDER BY joinDate DESC', (err, results)=>{
        //console.log(results);
        if(err) 
            throw err;
        else 
            res.render('member/listMembers.ejs', {membersList:results})
    });
});

router.get('/memberForm', (req, res)=>{
    res.render('member/memberForm.ejs');
});


router.post('/addMember',(req, res)=>{
    console.log(req.body);

    let body = req.body;
    //conn.query('INSERT INTO t_member(id,pwd,name,email VALUES (?,?,?,?)', [body.id, body.pwd, body.name,body.email]);
    conn.query('INSERT INTO t_member SET ?', body, (err,results)=> {
        if(err) 
            throw err;
        else 
            res.redirect('/member/listMembers');
    });
});


//:id 넘어오는 파라미터 값 받기 
router.get('/modMemberForm/:id', (req, res)=>{
    let id = req.params.id;
    console.log('mod id=>',id);
    conn.query('SELECT * FROM t_member WHERE id=?',id, (err,results)=>{
        if(err)
            throw err;
        else
            res.render('member/modMemberForm.ejs', {memberInfo:results[0]});
    });
});

router.post('/modMember',(req, res)=>{
    let body = req.body;
    console.log('mod req.body:', body);
    conn.query('UPDATE t_member SET pwd=?, name=?, email=? WHERE id=?', 
        [body.pwd, body.name, body.email, body.id], (err,results)=> {
        if(err) 
            throw err;
        else 
            res.redirect('/member/listMembers');
    });
});

router.get('/removeMember/:id', (req, res)=>{
    let id = req.params.id;
    console.log('remove id=>',id);
    conn.query('DELETE FROM t_member WHERE id=?', id, (err,results)=>{
        if(err)
            throw err;
        else
            res.redirect('/member/listMembers');
    });
});



module.exports = router;