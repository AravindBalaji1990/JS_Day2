//Normal Functions
function additionUsage(){
    var result = 4+3;
    return result;
}
console.log(additionUsage())

// function declaration
function isEven(num) {
    return num % 2 === 0;
  }
  
  console.log(isEven(24)); // => true
  console.log(isEven(11)); // => false

// if i want to execute the same method again and again but with differnet set of data
// parameterised function
function multiplicationUsage(a, b){
    return a*b;
}
console.log(multiplicationUsage(3,4))
console.log(multiplicationUsage(6,7))

// arrow based fucntion
const addition = (a,b) => a+b;
console.log(addition(1,2))
console.log(addition(5,2))


// Function Expression -> we call it as anonymous funtion becasue we dont provide a //name for the funciton
const multiply  = function(a,b){
    return a *b;
}
console.log('funciton as a expression -> ' ,multiply(3,2))