// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources

/*
ES6(ES2015) 시절의 객체 표현 방법
객체의 메서드에 :function을 붙이지 않아도 됨
{sayNode : sayNode}와 같은 것을 {sayNode}로 축약 가능
[변수 + 값] 등으로 동적 속성명을 객체 속성 명으로 사용 가능
*/

/*
{name : name, age: age} //ES5
{name, age}             //ES6(ES2015)
*/

var sayNode = function() {
    console.log('Node');
};
var es = 'ES';
const newObject = {
    //함수명이 KEY명으로 설정됨 
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic',
};
newObject.sayNode();        //Node
newObject.sayJS();          //JS
console.log(newObject.ES6); //Fantastic