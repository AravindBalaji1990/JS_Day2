//Anonymous Function
// const add = function(x, y) {
//     return x + y;
// };
// console.log(add(5, 3)); // Outputs 8

// Function as call back 
// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map(function(a) {
//     return a * a;
// });
// console.log(squared); // Outputs [1, 4, 9, 16, 25]

//IIFE - Immediatley invoked function expression
// it starts with '('
// (function() {
//     const message = "This is an IIFE!";
//     console.log(message);
// })();

const result = (function() {
    const num1 = 5;
    const num2 = 3;
    return num1 + num2;
})();

console.log(result); // Outputs 8

