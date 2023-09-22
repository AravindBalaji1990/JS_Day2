//constructor as a Function keyword without a class
//Function is a keyword in javascript which can accept parameter and logics
const xyz = new Function('a', 'b', 'return a * b');
console.log(xyz(2, 6));
console.log(xyz(8, 6));

const addition = new Function('a', 'b', 'return a + b');
console.log(addition(4,5))

 