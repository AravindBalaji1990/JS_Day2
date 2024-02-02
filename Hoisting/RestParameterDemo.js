// Example for Rest parameter
//reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any)
function sum(...numbers) { 
    return numbers.reduce((a, b) => a + b, 0); 
} 
console.log(sum(1, 2, 3,4,5));//6+1=7 (1+2+3)+0=> 

// function sub(a,b,c){
    
// }
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