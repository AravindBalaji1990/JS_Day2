// method 1  - we dont have a let /const but a simple function 
// which will allow to execute
// console.log(addition(1,2))
// function addition(a,b){
//     return a+b;
// }


//method 2 -> let so it will throw error
// anonymopuse/IIFE
console.log(multiply(1,2))
let multiply = function(a,b){
    return a * b;
}
console.log(multiply(1,2))

//method 3 -> const so it will throw error
// console.log(subtraction(3,4))
// let subtraction = (a,b)=>{
//     return a-b;
// }