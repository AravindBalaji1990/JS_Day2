//Array Basic Functions
//Array via literals
var emp=["a","b","c"];  // string of array
// to chekc the total lenght of the array
console.log("the total items inside the array : " + emp.length)
// to check the value of the array based on the index
console.log("it is going to get the nth element in the array :  " +emp[1])
// traditional for loop to check the items inside the array 
for (i=0;i<emp.length;i++){  
console.log(emp[i] +'-'+ i );  
}  

// Array directly
// array declaration basically -> via a class way
var i;  
var emp = new Array();  
emp[0] = "alphabet";  
emp[1] = "java";  
emp[2] = "c#";  
  
for (i=0;i<emp.length;i++){  
    console.log(emp[i] +'-' +i);  
}  

//via constructor
//similar to a class level constrcutor -> classname obj = new classname("t","r");
var emp=new Array("a","b","c",1,123,true);  
for (i=0;i<emp.length;i++){  
console.log(emp[i] + '-'+i);  
}  

//Array can accpet any data types 
var emp=["a","b","c",1,2,3,"javascript", true,"aravindbalaji.balaji7@gmail.com"]; 
for (i=0;i<emp.length;i++){  
console.log(emp[i] +'-'+ i );  
}  