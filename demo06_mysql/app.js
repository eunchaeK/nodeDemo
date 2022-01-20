const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database:'mydb',
    port: 3306
  });
  
  con.connect((err)=> {
    if (err) throw err;
    console.log("Connected!");
    
  });

  con.query('SELECT * FROM t_member', function(err, result, fields){
    console.log('query start');
  if(err){
      console.log('error');
  }else{
      console.log(result);
  }
});
  
//실행 : node app.js
  

