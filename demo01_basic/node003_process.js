//process : 프로세스의 실행에 대한 정보를 다루는 객체 

//console.log(process);

//프로세스를 실행할 때 전달되는 파라미터(매개변수) 정보 
console.log(process.argv);
console.log(process.argv.length);

//환경변수 정보 
console.log(process.env);

//프로세스 강제 종료 
process.exit();
