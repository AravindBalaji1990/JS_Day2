// array from  - convert the string to character
// let sample = Array.from('this is javascript session')  
// console.log(sample)  // this will hold the character data in a array
//array of - just determine the value in the array
// let of = Array.of(42,12,'sample',true) 
// console.log(of)  
// console.log(of.length)  
// copy within
//          [0,1,2,3,4,5,6,7,8,9]
// const num = [1,2,3,4,5,6,7,8,9,10];  
// const num1 = [1,2,3,4,5,6,7,8,9,10];  
// const num2 = [1,2,3,4,5,6,7,8,9,10];  
// console.log(num.copyWithin(1,3,5));  
// console.log(num1.copyWithin(1,3)); //omitting the parameter end  
// console.log(num2.copyWithin(1)); //omitting the parameters start and end  

// let arraydata = [1,2,3,4,5]
// //1,2,1,2,3
// // copy from the starting index 0 and paste starting from index 2
// arraydata.copyWithin(2,0)
// //arraydata.copyWithin(copy from index, starting index)
// console.log(arraydata)
                [0,1,2,3,4,5]
let arraydata = [1,2,3,4,5,6]
arraydata.copyWithin(1,3,6)
// arraydata.copyWithin(paste from index, copy start index, copy end index)
console.log(arraydata)