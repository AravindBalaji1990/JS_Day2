//Spread operator - applicable for array/objects
// concatenating, splitting

//array has been decalred
// const arr1 = [1, 2, 3,7,8,9];
//spread operator used inside the array
// const arr2 = [ 4, 5,...arr1]; 
// console.log(arr2);// combines the array

// convert the string to characters
// var data = "sample"
// var datachar = [...data]
// console.log(datachar)

//skipping elements while splitting
//                0 1 2 3 4
// const numbers1 = [1,2,3,4,5]
// // splice(start, deletecount,item)
// // numbers1.splice(1,3)
// // console.log(numbers1)
// const num = numbers1.slice(1,3)
// console.log(num)

//    1     2       3      4         // 1,2,3,4,5,6,7
// var [first,second, third , fourth] =  [...numbers1]
// // // let first,second= [...numbers1];//undefined
// console.log( first,second, third, fourth)

// Spread object -inside the object  
// const obj1 = { name: "John", age: 30}; 
// const obj2 = { city: "New York", country: "USA"}; 
// const combinedObject = { ...obj1, ...obj2 }; //spread operator for objects
// console.log(combinedObject);



// funcitont to add
// const numbers = [1,2,3,4,5]
// //arrow function
// const addition = (a,b,c) => a+b+c
// console.log(addition(...numbers))

//Rest parameter
function addition(...number){
    //reduce is a callback function in javascript 
    // it takes the parameter/argument and gives the result
    return number.reduce((num, num1)=>num+num1,0)
}

console.log(addition(1,2,3,4))
console.log(addition(1,2,3,4,5,6,7))

