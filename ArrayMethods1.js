// concate - combining two arrays
// var arr1=["C","C++","Python"];  
// var arr2=["Java","JavaScript","Android"];  
// var result=arr1.concat(arr2);  
// console.log(result);  
// console.log(arr1);  
// console.log(arr2);  

// copy with in 
//           0,1,2,3,4,5
//Example - [1,2,3,4,5,6]
// target index -3
// startindex -0
// end index -2
//        0,1
// [1,2,3,1,2,6]

//      [0          ,1        ,       2,        3 ]        
// var arr=["AngularJS","Node.js","JQuery","Bootstrap"] 
// // var arr=["Node.js","JQuery","JQuery","Bootstrap"] // -> Output
// // place at 0th position, the element between 1st and 2nd position. 
// // copies the elemtn between source and target 
// // copywithin(target, startindex, endindex) -> target will be replaced by startindex
// var result=arr.copyWithin(0,1,3);  
// console.log(result);   
// //         0         , 1        ,  2    ,   3
//  var arr=["AngularJS","Node.js","JQuery","Bootstrap"]; 
//  // copywithin(target, startindex) there is no end index available so it replaces everything after the start index
//  var result=arr.copyWithin(1,2);  
// console.log(result);   
// place from 1st position, the elements after 2nd position.  



//         0        , 1      , 2       , 3
// var arr=["AngularJS","Node.js","JQuery","Bootstrap"];  
// // var arr=["AngularJS","Node.js","AngularJS","Node.js"];  
// // place from 2nd position, the elements after 0th position.  
// var result=arr.copyWithin(2);  
// console.log(result);  

// what does of in for loop does
// var arr=['John','Michael','Embrose','Herry','Lewis'];  
// for(arr1 of arr){
//     console.log("values from array usinf of ", arr1)
// }

// // what does 'in' in for loop does
// var arr=['John','Michael','Embrose','Herry','Lewis'];  
// for(arr1 in arr){
//     console.log("values from array using in ", arr1)
// }
// entries -> it gets the index & values in the array as a key-value pair 
//        0       1        2          3       4
// var arr=['John','Michael','Embrose','Herry','Lewis'];  
// var itr=arr.entries();  
// console.log("After applying the entries method:"+ itr); 
// for(let[a,b] of arr.entries()){
//     console.log("Index data : ", a)
//     console.log("value data : ", b)
// }


// every  - where all the elements inside the array are put to test 
// its returns wither true/false
// to validate agians the function
// var marks=[0,2,1];  
// // // function with argument and return type
// // // named fucntion wiht argument/parameter
// function check(value)  
// {  
//   return value<=5;   
// }   
// console.log(marks.every(check));  

// //flat
// var arr =['a','b','c']
// var arr=['a','b',['c','d']]; //given 2D array  
// var newArr=arr.flat(); //using flat() method  
// console.log("After flattening the array:  "+ typeof newArr);  
// console.log("After flattening the array:  "+  newArr);  

// var arr=[90,18,[89,56],[13,20,[67,17]]]; //given multidimensional array  
// var newArr=arr.flat(1); //using flat() method  
// console.log("After flattening the array:  "+newArr);  

// var arr =[1,2,[3,4,[5,6]]]
// console.log(arr.flat(Infinity))
// default 1
// var arr=[90,18,[13,20],[67,17,[56,45]]]; //given multidimensional array  
// var newArr=arr.flat(); //using flat() method with a specified depth value.  
// console.log("After flattening the array:  "+newArr);  //90,18,13,20,67,17[]

//fill - replace the items in the array
// var arr=["AngularJS","Node.js","JQuery"];  
// var result=arr.fill("Bootstrap");  // fill through out the array
// console.log(arr);  

// var arr=["AngularJS","Node.js","JQuery"];  
// fill the data from the nth position
//fill("value",startindex, end index)
//if end index is not available then replace value till the end index
// var result=arr.fill("Bootstrap",1);  
// console.log(arr);  

//Array.prototype.filter -> exact result
//Array.prototype.every -> true/false
// filter -> its going to identofy the condition across
// all the vlaues inside the array
// var marks=[50,40,45,37,20];// array 
// // // function with parameter  
// function checkdata(marks)  
// {  
//   return marks>30;    
// }  
// // which are the statements that will be true will be filtered out 
// // exact result not a true or false
// console.log(marks.filter(checkdata));  

// function test(element, index, array) {  
//     return element>=25;  
//   }  
//   console.log([21,32,21,43].filter(test));

//find
// var arr=[5,22,19,25,34];  
// for(i=0;i<arr.length; i++){
//     if(arr[i]>20){
//         console.log(arr[i])
//         break;
//     }
// }
// we usea array/lambda way to find the condition
// but it will show the result at the first hit 
// it will not go beyond that 
// it will stop to execute as soon as the condition is satisfied but it will not iterate through out the array
//  var arr=[5,19,25,34];  
// var result1=arr.find(x => x>20);  
// console.log(result1)  

// var result2=arr.findIndex(x => x>20);  
// console.log(result2)  
//find index - similar to the find
// but it pull the idex value instead of the exact value
//      [0,1,2, 3, 4, 5]
var arr=[25,1,1,5,4,22];  
// //find INdex will have a logic and check for the validariton of the logic
// //out put will be the index value of the satisfied condition
arr.sort((a,b) => a-b) //ascending order 
console.log(arr)
arr.sort((a,b) => b-a) //descending order 
console.log(arr)
// var result=arr.findIndex(x=>x>20);  

// console.log(result) 
// console.log(arr.length-2)

// for each - iterates with in the array
// var arr = ["C", "C++", "Python"];  
// // function we call it as anonimous which holds the parameter
// // parameter will hold all the values inside the array
// arr.forEach(function(xyz) {  
//   console.log(xyz);  
// })


// pop - extracts the last elemet by default
// var arr=["AngularJS","Node.js","JQuery"];  
// console.log("Orginal array: "+arr);  
// console.log("Extracted element: "+arr.pop());  
// console.log("Remaining elements: "+ arr);  
// console.log("Extracted element: "+arr.pop());  
// console.log("Remaining elements: "+ arr);  

// push -> add the items at the end of the array
// var arr=["AngularJS","Node.js"];  
// console.log('original : ' + arr)
// arr.push("JQuery");  
// console.log("the new aray after push :",arr);  
// //new array
// var arr=["AngularJS","Node.js"];  
// console.log("Length before invoking push(): "+arr.length);  
// arr.push("JQuery","Bootstrap");  
// console.log("Length after invoking push(): "+arr.length);   
// console.log("Update array: "+arr); 
// arr.unshift("vuejs") // put the value in front unshift
// console.log("Update array: "+arr); 

//splice

// var arr = [1,2,3,4,5]

// var randomindexinsert = Math.floor(Math.random() * (arr.length-1))

// arr.splice(randomindexinsert,0, 101)
// console.log(arr)

//           0     1     2    3     4
// var arr1 =['abc','def','ghi','jkl','mno']
// //splice - arr.splice(startindex,deletecount(optional), item1,item2)
// arr1.splice(2,1) // this will delete the 2nd position elememnt
// arr1.splice(2,1, '123') // it will replace the 2nd position element
// console.log(arr1)

//slice - means it will cut the array 
   //   [0          , 1       ,  2     ,3          ]
// var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
// // slice(starting index value will be taken, excluded the index)
// var result=arr.slice(0,3);  
// console.log(result); 
// // it doesnt alter the original array
// console.log(arr)

// var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
// var result=arr.slice(0,3);  
// console.log(result);  

// //map() it willt ake the array ans use the same array to performa logic

// var num = [1,2,3]
// // expresseion from the num take each value put it in a variable a 
// var result = num.map(a => a*a)
// console.log(result)
