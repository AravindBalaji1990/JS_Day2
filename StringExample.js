// // initialise a string
// // var str="string";  
// // var str1 ='string'
// // console.log(str);
// // console.log(str1);  


// // object way/constrcutor way to initalise a string
// // var stringname=new String("hello javascript string");  
// // console.log(stringname);  


// // substr - getting the part of string with a string
// var str=123;  
// console.log(typeof str.toString())
// // var num =123
// // console.log(typeof num)
// // console.log(parseInt(str))
// // console.log(parseFloat(str))


// var str="Javascript";  
// console.log(str.substr(5,5));// deprecated  
// //new way
//        // 0123 
// // var str="Javascript";  
// console.log(str.substring(0,4));  // 0,1,2,3
// console.log(str.length); // get the lenght of the word
// console.log(str.toLowerCase());  // conver t the data to lower case
// console.log(str.toUpperCase());  // convert the data to upper case
// console.log(str.startsWith('Ja')); // check whether the data starts with
// console.log(str.endsWith('pt'));// check whether the data ends with
// console.log(str == 'Javascript'); // case sensitivity

 

// console.log(str === 'Javascript'); // strict equality operator 
// console.log(5 === "5")
// var x = 5
// console.log(Number.parseInt("5xyz"))// it extract the integer value and converts to Number
// console.log(x == Number.parseInt("5xyz")) // compare justr the value
// console.log(x == "5") // compare the value and dataype of the value
// console.log(x === Number.parseInt("5xyz")) // compare the value and dataype of the value
// console.log(typeof 5)
// console.log(typeof "5")

//match - match regular expression 
// var str="test@gmail.com";  
// const result = str.match(/([\w]+)([\@])([\w]+)([\.])([\w]+)/)
// console.log(result);  
// var validationpattern =/([\w]+)([\@])([\w]+)([\.])([\w]+)/

// var checkvalid =validationpattern.test(str)
// console.log(checkvalid)

// var data = "hello world";
// const result1 = /world/;
// console.log(data.match(result1))

// var data = "price is $20.999"
// const result2 = data.match(/\$\d+\.\d{3}/)
// console.log(data.match(result2))

// if(result2){
//        var a = result2[0]
//        console.log(a)
// }


//negative
// var str="Javascript";  
// console.log(str.match(/Java/g));  
//positive
// var str="Javascript";  
// console.log(str.match(/[a-p]/g));  

//slice
//         0123456789    
var str = "Javascript";  
console.log(str.slice(2,5));   

var str = "Javascript";  
console.log(str.slice(-5)); 

// // var str = "Javascript";  
console.log(str.slice(-5,-1));  

//search - which index the word exists it will give as output
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log(str.search("is"));  

// var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
// console.log(str.search(/Scripting/));  

//parse - converting form one type to another
// var data =100;
// console.log(typeof data)
// console.log(data.toString())
// console.log(typeof data)
// data = data.toString()
// console.log(typeof data)

// const regexpattern = /^[a-zA-Z0-9]+$/;
// const regex = new RegExp(regexpattern);

// const teststr = "Hello";
// const isvalid = regex.test(teststr)
// console.log(isvalid)