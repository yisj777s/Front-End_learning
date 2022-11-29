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

