'use strict';
//Object-oriendted programming
//class: template
//Object: instance of a class
//JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

//1. Class declarations
class Person {
    // constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const seongju = new Person('seongju',27);
console.log(seongju.name);
console.log(seongju.age);
seongju.speak();

// 2. Getter and setters
class User{
    constructor(firstName, lastName, age, fullname){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullname = fullname;
        this.age=age;
    }
    get age(){
        return this._age;
    }

    set age(value){
        //if(value < 0){
        //    throw Error('age can not be nagative');
        //}
        this._age = value < 0 ? 0 : value;
    }
    //my
    get fullname(){
        return this._fullname;
    }
    set fullname(value){
        this._fullname = value ='스티브잡스' ? 'abc123': value;
    }
}

const user1 = new User('Steve','job',-1,'스티브잡스');
console.log(user1.age);
console.log(user1.fullname);

//3. Fields(public, private)
//Too soon!
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
    publicField = 2;
    #privateField=0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods
//Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
    printPublisher2(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.articleNumber);
console.log(article2.articleNumber);
console.log(Article.publisher);
console.log(article1.publisher);
console.log(article1.printPublisher);
Article.printPublisher();
article2.printPublisher2();

//5. Inheritance
//a way for one class to extend another class.
class Shape{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}  
class Triangle extends Shape {
    draw(){
        super.draw();
        console.log('🔺')
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
    toString(){
        return `Triangle: color: ${this.color}`;
    }
}  

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

//Fun quiz time
//function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder

function calculate(command, a, b){
    switch(command){
        case 'add':
            return a+b;
        case 'substract':
            return a-b;
        case 'divide':
            return a / b;
        case 'remainder':
            return a % b;
        caes
        default:
            throw Error('unkonwn command');
    }
}
console.log(calculate('divide',2,3));