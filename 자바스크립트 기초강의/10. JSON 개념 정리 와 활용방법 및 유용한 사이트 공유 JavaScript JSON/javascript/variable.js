'use strict';

//2. Variable, rw(read/write)
//let(added in ES6)
let globalName='global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//var(don't ever use this!)
//var hoisting
{
    age=4;
    var age;
}

console.log(age);
//3.Constant, r(read only)
//use const whenever possible.
//only use let if variable needs to change.
//포인터를 잠금

const daysInWeek =7;
const maxNumber=5;

//Note!
//Immutable data types: premitive types, frozen object(i.e. objext.freeze())
//Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons:
//-security
//thread safety
//reduce human mistakes 

//4. Variable types
//primitive, single item: number,string,boolean,null,undefined,symbol
//object, box container
//function, first-class function

//number
const count=17;//integer
const size=17.1;//decial numver
console.log(count);
console.log(size);
const infinity=1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt(fairly new,don't use it yet)
const bigInts=1234567890123456789012345678901234567890n;
console.log(bigInts);
console.log(typeof(bigInts));

//string
const char='c';
const brendan='brendan2';
const greeting='hello'+ brendan;
console.log(greeting);
console.log(typeof(greeting));
console.log(typeof(char));
const helloBob=`hi ${brendan}!`;
console.log(helloBob);
console.log(typeof helloBob);
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log(typeof helloBob);

//boolean
//false: 0, null, undefined, NaN
//true: any other value
const canRead = true;
const test = 3<1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
//undefinded
let x;
let x2 = undefined;
console.log(`value: ${x} ${x2}, type: ${typeof x2} ${typeof x} `);

//symbol, create nuique identifiers for objects
const symbol1= Symbol('id');
const symbol2= Symbol('id');
console.log(symbol1===symbol2);
const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1==gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof gSymbol1}`);

//5.Dynamic typing: dynamically typed language
let text='hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text=1;
console.log(`value: ${text}, type: ${typeof text}`);
text='7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text=7+'5';
console.log(`value: ${text}, type: ${typeof text}`);
text='8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);
text='8'/2;
console.log(`value: ${text}, type: ${typeof text}`);
text=8+2;
console.log(`value: ${text}, type: ${typeof text}`);

//object, real-life object, data structure
const ellie={name: 'ellie', age: 20};
ellie.name='sjy';
ellie.age=22222;


