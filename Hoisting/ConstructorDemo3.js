// Class declaration
class Person{

    // constructor declaration - it doesnt hold a name
    // but it has parameters
     constructor(name, age) { 
        this.a= name; 
        this.b= age; 
    } 

    // writing a function
    sayHello() 
        {
        // what ever is inside the function will be givent he priority
        //this.a ="sam";
        console.log(`Hello, my name is ${this.a} and the age is ${this.b}.`); 
        console.log("Hello, my name is " + this.a)
        } 
    } 

    //creating object for the class /constructor

    const person = new Person('sample', 19)
    person.sayHello()
    // const person1 = new Person('sampleeeeee', 20)
    // person1.sayHello()