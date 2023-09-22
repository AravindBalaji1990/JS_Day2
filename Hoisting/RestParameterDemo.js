// Example for Rest parameter
// function sum(...numbers) { 
//     return numbers.reduce((acc, val) => acc + val, 0); 
// } 
// console.log(sum(1, 2, 3));


// function range(start, end) { 
//     return Array.from({ 
//         length: end - start + 1
//     }, (_, i) => start + i); 
// } 
// const numbers = range(1, 5); 
// console.log(numbers);

// Rest parameter can store the 'n' values and retrive it 
function printInfo(firstName, lastName, ...hobbies) { 
    console.log(`Name: ${firstName} ${lastName}`); 
    console.log("Hobbies:", hobbies); 
} 
printInfo("John", "Doe", "Reading", "Running", "Painting");