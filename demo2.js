console.log(typeof null); //object
console.log(typeof 1n); //bigint
console.log(typeof Symbol(100)); //symbol
console.log(typeof function(){}); //function
console.log(typeof {}); //object
console.log(typeof console); //object
//json
var obj={
    "key1":"hello",
    "key2":"hello2",
    "key3":"hello3"
};
console.log(obj.key1,obj.key2,obj.key3); //hello hello1 hello2
//iterate
//for...in loop
for(let key in obj){
console.log(key); //key1 key2 key3
console.log(obj[key]); //hello hello2 hello3
console.log(typeof key); //string string string
};




var obj1={

};
let key1={}
let value1="hello1";
obj1[key1]=value1;
console.log(obj1);


let key2={};
let value2="hello2";
obj1[key2]=value2;


let key3={};
let value3="hello3";
obj1[key3]=value3;
console.log(obj1);  // hello3



let obj2=new Map();
let k1={};
var v1="hello1";


var k2={};
var v2="hello2";



var k3={};
var v3="hello3";
obj2.set(k1,v1)
     .set(k2,v2)
    .set(k3,v3);

console.log(obj2); //






