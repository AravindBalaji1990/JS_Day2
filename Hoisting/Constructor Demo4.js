//constructor Function whay of declaring a constrcutor

function Person(name, age) { 
    // this -> its  akeywor din js 
    // it denotes the value of the variable at that instance
    this.name= name; 
    this.age= age; 

    // this is a method function
    // it will denote a anonymous function
    //whenever we have ${variable} -> this will be a parameterised variable
    this.sayHello= function() {
         console.log(`Hello, my name is ${this.name}.`) 
        } 
        } 

// Creating an object using the constructor        
//we are declaring a object fro the constrcutor function 
//to invoke the method function         
const person1 = new Person("John", 30);
const person2 = new Person("Johnny", 29);

// Outputs: "Hello, my name is John."
person1.sayHello(); 
person2.sayHello();