//Class declaration - method 1
//ES6 version of class/constructor
function Person(name, age) {  
    //this is where the variables oif the constructor is intialised
    this.name= name; 
    this.age= age;

    // function inside a class
     this.sayHello= function() {
         console.log(`Hello, my name is ${this.name}.`); 
        }; 
} 

function Tram(name, age) {  
    //this is where the variables oif the constructor is intialised
    this.name= name; 
    this.age= age;

    // function inside a class
     this.sayHello= function() {
         console.log(`Hello, my name is ${this.name}.`); 
        }; 
} 
// declation/ object creation for a class in Javascript
//class is referenced by a const variable
const person1 = new Person('javascript',10)
person1.sayHello()         
const person2 = new Tram('java',10)
person2.sayHello()