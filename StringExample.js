// initialise a string
// var str="string";  
// var str1 ='string'
// console.log(str);
// console.log(str1);  


// object way/constrcutor way to initalise a string
// var stringname=new String("hello javascript string");  
// console.log(stringname);  


// substr - getting the part of string with a string
// var str=123;  
// console.log(typeof str.toString())
// var num =123
// console.log(typeof num)
// console.log(parseInt(str))
// console.log(parseFloat(str))

// var numvalue = Number(str)
// console.log(parseInt(numvalue))
// console.log(str.substr(5,5));// deprecated  
// //new way
       //0123 
// var str="Javascript";  
// console.log(str.substring(0,4));  // 0,1,2,3
// console.log(str.length); 
// console.log(str.toLowerCase());  
// console.log(str.toUpperCase());  
// console.log(str.startsWith('Ja'));
// console.log(str.endsWith('pt'));
// console.log(str == 'Javascript'); 
// console.log(5 == '5'); 
 

// console.log(str === 'Javascript'); // strict equality operator 
// console.log(5 === "5")
// var x = 5
// console.log(Number.parseInt("5xyz"))// it extract the integer value and converts to Number
// console.log(x == Number.parseInt("5xyz")) // compare justr the value
// console.log(x === "5") // compare the value and dataype of the value
// console.log(x === Number.parseInt("5xyz")) // compare the value and dataype of the value
// console.log(typeof 5)
// console.log(typeof "5")

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
//         0123456789    
var str = "Javascript";  
// console.log(str.slice(2,5));   

// var str = "Javascript";  
// console.log(str.slice(-5)); 

// // var str = "Javascript";  
// console.log(str.slice(-5,-1));  

//search - which index the word exists it will give as output
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log(str.search("xyz"));  

// var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
// console.log(str.search(/Scripting/));  

//parse - converting form one type to another
// var data =100;
// console.log(typeof data)
// console.log(data.toString())
// console.log(typeof data)
// data = data.toString()
// console.log(typeof data)
