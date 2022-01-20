// 모듈을 참조할 때 사용 
/*
const calVar = require('./var');

function checkOddEven(num){
    if(num%2!=0){       //홀수
        console.log('%s: %d', calVar.odd, num);
        return calVar.odd;

    }else{              //짝수
        console.log('%s: %d', calVar.even, num);
        return calVar.even;
    }
}


console.log('%s:', checkOddEven(3));
console.log('%s:', checkOddEven(6));
*/
/* ============================================= */

const {odd,even} = require('./var');

function checkOddEven(num){
    if(num%2!=0){       //홀수
        return odd;

    }else{              //짝수
        return even;
    }
}


//console.log('%s:', checkOddEven(3));
//console.log('%s:', checkOddEven(6));

module.exports = checkOddEven;

//아직 지원 제대로 안됨,,
//module default checkOddEven;

