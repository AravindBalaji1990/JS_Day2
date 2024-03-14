let addition =(a,b) =>{
    return a+b;
}

let suibtract =(a,b) =>{
    return a-b;
} 

// addition(2,3) = subtraction(5,6)
// subtraction(1,3)
let reassginaddition = addition;

let result = reassginaddition(1,2);
console.log(result)

reassginaddition = suibtract

result = reassginaddition(5,6)
console.log(result)
