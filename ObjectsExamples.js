// Normal Object creation
// let emp={
//     id:102,
//     name:"Shyam Kumar",
//     salary:40000
// }  
// console.log(emp.id+" "+emp.name+" "+emp.salary); 

//creating object using instance
// var objectname=new Object();  

// var emp1=new Object();  
// emp1.id=101;  
// emp1.name="Ravi Malik";  
// emp1.salary=50000;  
// emp1.address ="chennai, india"
// console.log(emp1.id+" "+emp1.name+" "+emp1.salary)+ "" +emp1.address;  

// //using object constructor
// function emp(id,name,salary){  
//     this.id=id;  
//     this.name=name;  
//     this.salary=salary;  
//     }  
//     e=new emp(103,"Vimal Jaiswal",30000);  
//     e1= new emp(105,"sample",43534)
// console.log(e.id+" "+e.name+" "+e.salary); 
// console.log(e1.id+" "+e1.name+" "+e1.salary); 

// //defining method in javascript
// representaion of constructor function
// emp -> its acts as a class + function contructor
function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
   
    this.changeSalary=changeSalary;  
    function changeSalary(otherSalary){  
    this.salary=otherSalary;  //salary will be updated
    }  
    }  
    e=new emp(103,"Sonoo Jaiswal",30000);  
    console.log(e.id+" "+e.name+" "+e.salary);  
    e.changeSalary(45000);  
    console.log(e.id+" "+e.name+" "+e.salary);  