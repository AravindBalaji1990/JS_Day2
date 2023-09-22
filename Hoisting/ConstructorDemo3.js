// Class declaration
class Person{
    // constructor declaration - it doesnt hold a name
    // but it has parameters
     constructor(name, age) { 
        this.a= name; 
        this.b= age; 
    } 
        sayHello() 
        {
        // this.name ="sam";
        console.log(`Hello, my name is ${this.a} and the age is ${this.b}.`); 
        } 
    } 

    const person = new Person('sample', 19)
    person.sayHello()
    // const person1 = new Person('sampleeeeee', 20)
    // person1.sayHello()