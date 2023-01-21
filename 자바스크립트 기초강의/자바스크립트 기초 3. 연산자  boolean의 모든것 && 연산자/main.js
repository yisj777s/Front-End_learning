//false: 0, -0, '', null, undefined
//true: -1, 'hello',[], 'false'
let num; //nudefined
let num2 = 1.1919;
if(num) {
    console.log('true!');
} else {
    console.log('false!');
}
num && console.log(num);
num2 && console.log(num2);

let obj = {
    name: 'ellie',
};
if(obj) {
    console.log(obj.name);
}

obj && console.log(obj.name);


