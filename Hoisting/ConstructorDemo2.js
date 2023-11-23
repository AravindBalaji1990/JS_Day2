//contructor with class
// object declaration in javascript
const sample = new Person("Otto");
sample.introduce(); // Hello, my name is Otto

class Person {
  // declare the constructor
  //"constrcutor" -> keyword
  constructor(xyz) {
    this.name = xyz;
  }

  // function 
  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}



// const sam = new Person("samoan");
// sam.introduce()

// const empty = new Person();
// empty.introduce()