// concate - combining two arrays
// var arr1=["C","C++","Python"];  
// var arr2=["Java","JavaScript","Android"];  
// var result=arr1.concat(arr2);  
// console.log(result);  
// console.log(arr1);  // the existin array will not be affected

// copy with in 
//      [0          ,1        ,       2,        3]        
// var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
// // place at 0th position, the element between 1st and 2nd position. 
// // copies the elemtn between source and target 
// var result=arr.copyWithin(0,1,2);  
// console.log(result);  

//  var arr=["AngularJS","Node.js","JQuery","Bootstrap"];  
// // place from 1st position, the elements after 2nd position.  
// var result=arr.copyWithin(1,2);  
// console.log(result);  


// var arr=["AngularJS","Node.js","JQuery","Bootstrap"];  
// // place from 2nd position, the elements after 0th position.  
// var result=arr.copyWithin(2);  
// console.log(result);  

// entries -> it gets the index & values in the array as a key-value pair 
// var arr=['John','Michael','Embrose','Herry','Lewis'];  
// var itr=arr.entries();  
// console.log("After applying the entries method:"+ itr); 
// for(const[index,value] of arr.entries()){
//     console.log("Index data : ", index)
//     console.log("value data : ", value)
// }


// every  - where all the elements inside the array are put to test 
// its returns wither true/false
// to validate agians the function
// var marks=[1,0,4,3,7];  
// // function with argument and return type
// function check(value)  
// {  
//   return value<0;   
// }   
// console.log(marks.every(check));  

// //flat
// var arr=['a','b',['c','d']]; //given 2D array  
// var newArr=arr.flat(); //using flat() method  
// console.log("After flattening the array:  "+newArr);  

// var arr=[90,18,[89,56],[13,20,[67,17]]]; //given multidimensional array  
// var newArr=arr.flat(); //using flat() method  
// console.log("After flattening the array:  "+newArr);  

//default 1
// var arr=[90,18,[13,20,[67,17,[56,45]]]]; //given multidimensional array  
// var newArr=arr.flat(0,1); //using flat() method with a specified depth value.  
// console.log("After flattening the array:  "+newArr);  

//fill - replace the items in the array
// var arr=["AngularJS","Node.js","JQuery"];  
// var result=arr.fill("Bootstrap");  // fill through out the array
// console.log(arr);  

// var arr=["AngularJS","Node.js","JQuery"];  
// // fill the data from the nth position
// var result=arr.fill("Bootstrap",1);  
// console.log(arr);  

//Array.prototype.filter -> exact result
//Array.prototype.every -> true/false
// filter -> its going to identofy the condition across
// all the vlaues inside the array
// var marks=[50,40,45,37,20];// array 
// // function with parameter  
// function check(value)  
// {  
//   return value>30;    
// }  
// console.log(marks.filter(check));  

// function test(element, index, array) {  
//     return element>=25;  
//   }  
//   console.log([21,32,21,43].filter(test));

//find
// var arr=[5,22,19,25,34];  
// // we usea array/lambda way to find the condition
// // but it will show the result at the first hit 
// // it will not go beyond that 
// var result=arr.find(x=>x>20);  
// console.log(result)  

//find index - similar to the find
// but it pull the idex value instead of the exact value
// var arr=[5,1,19,22,25,34];  
// var result=arr.findIndex(x=>x>20);  
// console.log(result) 

// for each - iterates with in the array
// var arr = ["C", "C++", "Python"];  
// // function we call it as anonimous which holds the parameter
// // parameter will hold all the values inside the array
// arr.forEach(function(xyz) {  
//   console.log(xyz);  
// })


//pop - extracts the last elemet by default
// var arr=["AngularJS","Node.js","JQuery"];  
// console.log("Orginal array: "+arr);  
// console.log("Extracted element: "+arr.pop());  
// console.log("Remaining elements: "+ arr);  

// push -> add the items at the end of the array
// var arr=["AngularJS","Node.js"];  
// console.log('original : ' + arr)
// arr.push("JQuery");  
// console.log(arr);  
// //new array
// var arr=["AngularJS","Node.js"];  
// console.log("Length before invoking push(): "+arr.length);  
// arr.push("JQuery","Bootstrap");  
// console.log("Length after invoking push(): "+arr.length);   
// console.log("Update array: "+arr);  

//slice
//      [0          , 1       ,  2     ,3        ]
// var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
// slice(starting index value of first, excludes the index)
// var result=arr.slice(1,3);  
// console.log(result); 
// it doesnt alter the array
// console.log(arr)

// var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
// var result=arr.slice(0,3);  
// console.log(result);  