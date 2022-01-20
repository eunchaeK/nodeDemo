/*
console.dir(object) : 자바스크립트 객체의 속성을 출력한다. 
console.time(id) : 실행시간을 측정하기 위한 시작시간을 기록한다. 
console.timeEnd(id) : 실행시간을 측정하기 위한 끝 시간을 기록한다. (time의 id값과 동일)

*/

const obj = {
    outside:{
        inside:{
            key : 'value'
        }
    }
};


//console.dir(객체, 옵션) : 객체를 콘솔에 표시할 때 사용한다.
//첫 번째 인자로 객체를 넣고, 두 번째 인자로 옵션을 넣는다.
//두 번째 인자의 옵션은 color를 true로 하면 콘솔에 색이 추가되어 출력되고
//depth는 객체 안의 객체를 몇 단계까지 보여줄지를 지정한다. (default:2)
//console.dir(obj);
console.dir(obj, {colors:false, depth:2});
console.dir(obj, {colors:true, depth:1});
console.dir(obj, {colors:true, depth:0});

//실행시간 출력 
console.time('stopwatch');
for(let i=0;i<10000;i++){
    continue;
}
console.timeEnd('stopwatch');



