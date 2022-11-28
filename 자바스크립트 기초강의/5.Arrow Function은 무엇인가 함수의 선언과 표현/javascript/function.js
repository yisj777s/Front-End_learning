//Function
//-fundamental building block in the program
//-subprogram can be used multiple times
//-performs a task or calculates a value

//1.Function declaration
//function name(param1, param2){body... return;}
//one function === one thing
//naming: doSomething, command, verb
//e.g. createCarAndPoint -> createCard, creatPoint
//function is object in JS
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}

log('Hello@');
log(12345678);

//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj){
    obj.name='coder';
}
const seongju={name: 'seongju'};
changeName(seongju);
console.log(seongju);

//3. Default parameters (added in ES6)
function showMessage(message, from = 'unkonwn'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4.Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg)=>console.log(arg));
}
printAll('dream','coding','ellie');

//5.local scope
let globalMessage='global'; //global variable
function printMessage(){
    let message='hello';
    console.log(message);//local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage='hello';
    }
}
printMessage();

// 6. Return a value
function sum(a,b){ 
    return a + b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);
console.log(result);

///7. Early return, early exit
//bad
function upgradeUser(user){
    if(user.point>10){
        //long upgrade logic...
    }
}
//good
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    //long upgrade logic...
}

//First-Class function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions.
//can be returned by another function

//1.Function expression
//a function declaration can be called earlier than it is defined.(hoisted)
//a function expresstion is created when the execution reaches it.
const print = function(){ //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain=sum;
console.log(sumAgain(1,3));

//2. callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer==='love you'){
        printYes();
    }else{
        printNo();
    }
}
//anonymous function
const printYes = function(){
    console.log('yes!');
};

//named function
//better debugging in debugger's stack tracces
//recursions
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);

//Arrow function
//always anonymous
//const simplePrint = function(){
//   console.log('simplePrint!');
//};
const simplePrint = ()=>console.log('simplePrint!');
const add = (a,b) => a + b;
const simpleMulitply = (a,b) => {
    //do something more
    return a * b;
};

//IIFE: Immediately Invoked Function Expresstion
(function hello(){
    console.log('IIFE');
})();

//Fun quiz time
//function calculate(command,a,b)
//command: add, substract, divide, multiply, remainder
