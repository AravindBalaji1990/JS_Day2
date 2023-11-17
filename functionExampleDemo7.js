function* arraycheck (array, condtions){
    for(const item of array){
        if(condtions(item)){
            yield "accepted";
        }else{
            yield "failure";
        }
    }
}
const number =[1,5,10,13,100];
const isdiv = num=> num%2 === 0

const xyz = arraycheck(number, isdiv);

console.log(xyz.next().value)
console.log(xyz.next().value)
console.log(xyz.next().value)
console.log(xyz.next().value)
console.log(xyz.next().value)
console.log(xyz.next().value)