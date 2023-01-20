//primitive type
//number, string, boolean, null, undefined
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

//object
let obj = {
    name: 'ellie',
    age: 5,
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);
console.log(obj2.age);

obj.name = 'james';
console.log('---------');
console.log(obj.name);
console.log(obj2.name);

//let
let a = 2;

a = 5; //값변경가능.

//const
const num = 2;
//num = 4; //값변경불가 

const obj3 = {
    name: 'ellie',
    age: 5,
};

//불가능
// obj3 = {
//     name: 'ellie',
//     age: 7,
// }

//가능
obj3.name = 'seongju';

console.log(obj3.name);


