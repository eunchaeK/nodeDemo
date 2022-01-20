//프로미스(Promise)

/*
[프로미스의 then 연달아 사용 가능(프로미스 체이닝)]
- then 안에서 return한 값이 다음 then으로 넘어감
- return 값이 프로미스면 resolve 후 넘어감
- 에러가 난 경우 바로 catch로 이동
- 에러는 catch에서 한 번에 처리
*/


const condition = true;     //true면 resolve, false면 reject 
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});

// promise.then().then().catch();  finally는 생략가능, then/catch는 여러개 가능 

promise
.then((message)=>{
    return new Promise((resolve, reject)=>{
        resolve('message: ' + message);
    });
})
.then((message2)=>{
    // message2: message: 성공
    console.log('message2: ' + message2);
})
.catch((error)=>{
    console.log(error);
});

