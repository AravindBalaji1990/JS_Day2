//A generator function in JavaScript is a special type of function introduced in ES6 that can be paused and resumed during its execution. It's defined using the function* syntax.
// function* countUpTo(max) {
//     let count = 1;
//     while (count <= max) {
//         yield count; // Pause the function and yield the current value
//         count++;
//     }
// }

// const generator = countUpTo(5);

// for (const number of generator) {
//     console.log(number);
// }


//fibonacci example

function* fibonacciGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const generator1 = fibonacciGenerator();

for (let i = 0; i < 10; i++) {
    console.log(generator1.next().value);
}

//Example for yield
// function* myGenerator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const generator2 = myGenerator();

// console.log(generator2.next()); // { value: 1, done: false }
// console.log(generator2.next()); // { value: 2, done: false }
// console.log(generator2.next()); // { value: 3, done: false }
// console.log(generator2.next()); // { value: undefined, done: true }
