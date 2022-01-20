/*
문자열을 합칠 때 + 기호때문에 지저분함
ES2015이후부터 `(백틱) 사용하여 문자열 합침 
*/

const num3 =1;
const num4 = 2;
const result2 = 3;
const String2 = `${num3} 더하기 ${num4}는 '${result2}'`;

// 1 더하기 2는 '3'
console.log(String2);