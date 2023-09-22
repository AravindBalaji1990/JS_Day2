// Normal Object creation
let emp={id:102,name:"Shyam Kumar",salary:40000}  
console.log(emp.id+" "+emp.name+" "+emp.salary); 

//creating object using instance
//var objectname=new Object();  

var emp1=new Object();  
emp1.id=101;  
emp1.name="Ravi Malik";  
emp1.salary=50000;  
console.log(emp1.id+" "+emp1.name+" "+emp1.salary);  

//using object constructor
function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
    }  
    e=new emp(103,"Vimal Jaiswal",30000);  
console.log(e.id+" "+e.name+" "+e.salary); 

//defining method in javascript
function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
      
    this.changeSalary=changeSalary;  
    function changeSalary(otherSalary){  
    this.salary=otherSalary;  
    }  
    }  
    e=new emp(103,"Sonoo Jaiswal",30000);  
    console.log(e.id+" "+e.name+" "+e.salary);  
    e.changeSalary(45000);  
    console.log("<br>"+e.id+" "+e.name+" "+e.salary);  