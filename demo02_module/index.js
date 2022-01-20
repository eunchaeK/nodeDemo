const checkOddEven = require('./func');
const {odd, even} = require('./var');

function checkStringObject(str){
    if(str.length % 2 ){    //홀수이면
        return odd;
    }else{
        return even;
    }
}

console.log(checkStringObject('HelloWorld'));
console.log(checkOddEven(4));
console.log(checkOddEven(5));
