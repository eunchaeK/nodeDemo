/* 
모듈: 특정한 기능을 하는 함수나 변수들의 집합
모듈을 생성하면 여러 프로그램에서 재사용이 가능하다. 
*/

const odd = '홀수';
const even = '짝수';


//console.log('odd: %s', odd );
//console.log('even: %s', even );


// 외부로 자원을 내보내줌 
//module.exports = odd;
module.exports={odd, even};



