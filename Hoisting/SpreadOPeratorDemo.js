//array has been decalred
const arr1 = [1, 2, 3];
//spread operator used inside the array
const arr2 = [...arr1, 4, 5]; 
console.log(arr2);// combines the array


// Spread object -inside the object  

const obj1 = { name: "John", age: 30}; 
const obj2 = { city: "New York", country: "USA"}; 
const combinedObject = { ...obj1, ...obj2 }; 
console.log(combinedObject);