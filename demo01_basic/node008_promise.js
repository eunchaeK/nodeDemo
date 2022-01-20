/*
 [콜백 헬이라고 불리는 지저분한 자바스크립트 코드의 해결책]

프로미스(Promise): 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
Then을 붙이면 결과를 반환함
실행이 완료되지 않았으면 완료된 후에
Then 내부 함수가 실행됨

Resolve(성공리턴값) -> then으로 연결
Reject(실패리턴값) -> catch로 연결
Finally 부분은 무조건 실행됨
*/


const condition = false;     //true면 resolve, false면 reject 
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});

//promise.then().catch().finally();

promise
.then((message)=>{
    console.log(message);   //성공(resolve)한 경우 
})
.catch((error)=>{           //실패(reject)한 경우 
    console.log(error);
})
.finally(()=>{              //무조건 실행 
    console.log('end');
});