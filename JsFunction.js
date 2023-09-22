// function with return type
function getInfo(){  
return "hi welcome to class";  
}  
console.log(getInfo());  

// funciton with apply
// var array = [1,2,3,4];  
// var newarray=["One","Two","Three","Four"]  
// array.push.apply(array, newarray);  
// console.log(array);

// //bind
// var website = {  
//     name: "helo",  
//     getName: function() {  
//       return this.name;  
//     }  
//   }  
//   var unboundGetName = website.getName;  
//   var boundGetName = unboundGetName.bind(website);  
//   console.log(boundGetName());  

//   //Call
  // function Emp(id,name) {  
  //   this.id = id;   
  //   this.name = name;  
  // }  
  // function PermanentEmp(id,name) {  
  //  Emp.call(this,id,name);  
  // }  
  // console.log(new PermanentEmp(101,"John Martin").id);

//   //toString

  // function add(a,b) {  
  //   return a + b;  
  // }  
  // console.log(add.toString());  
  // console.log(typeof add.toString());  