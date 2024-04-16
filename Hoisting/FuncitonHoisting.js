// method 1  - we dont have a let /const but a simple function 
// which will allow to execute
// console.log(addition(1,2))
// console.log(addition("St","2"))
// // named function
// function addition(a,b){
//     return a+b;
// }

// function name (abc,xyz){
//  return abc+xyz
// }

//method 2 -> let so it will throw error
// anonymopuse/IIFE
console.log(multiply(1,2))
var multiply = function(a,b){
    return a * b;
}
console.log(multiply(1,2))

//method 3 -> const so it will throw error
// console.log(subtraction(3,4))
// var subtraction = (a,b)=>{
//     return a-b;
// }