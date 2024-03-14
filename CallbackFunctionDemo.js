// let num =[1,2,3,4,5]
// num.forEach(function(a){
//     console.log(a*2);
// })

let num =[1,2,3,4,5]
let result = num.filter(function(a){
return a %2 ===0
})
console.log(result)


// let num =[1,2,3,4,5]
// let result =num.reduce(function(acc, currentvalue){
// return acc+currentvalue;
// },0)

// console.log(result)