// initialise a string
// var str="string";  
// var str1 ='string'
// console.log(str);
// console.log(str1);  


// object way/constrcutor way to initalise a string
var stringname=new String("hello javascript string");  
// console.log(stringname);  


// substr - getting the part of string with a string
// var str="helloabcd efgh";  
// console.log(str.substr(5,5));// deprecated  
// //new way
// var str="Javascript";  
// console.log(str.substring(0,4));  

//match - match regular expression 
// var str="abcd1234+";  
// const result = str.match(/([a-zA-Z]+)([0-9]+)(\+)/)
// console.log(result);  

// var data = "hello world";
// const result1 = /world/;
// console.log(data.match(result1))

// var data = "price is $20.999"
// const result2 = data.match(/\d+\.\d{3}/)
// console.log(data.match(result2))

//negative
// var str="Javascript";  
// console.log(str.match(/Java/g));  
//positive
// var str="Javascript";  
// console.log(str.match(/[a-p]/g));  

//slice
// var str = "Javascript";  
// console.log(str.slice(2,5));   

// var str = "Javascript";  
// console.log(str.slice(-5)); 

// var str = "Javascript";  
// console.log(str.slice(-5,-1));  

//search - which index the word exists it will give as output
// var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
// console.log(str.search("scripting"));  

// var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
// console.log(str.search(/Scripting/));  

//parse - converting form one type to another
// var data =100;
// console.log(typeof data)
// console.log(data.toString())
// console.log(typeof data)
// data = data.toString()
// console.log(typeof data)
