function* fiboseries(){
    var prev =0;
    var curr =1;
    while(true){
        yield curr;
        [prev,curr] = [curr,prev+curr];
    }
}
const data = fiboseries()

console.log(data.next().value)
console.log(data.next().value)
console.log(data.next().value)
console.log(data.next().value)
console.log(data.next().value)
console.log(data.next().value)
console.log(data.next().value)
console.log(data.next().value)
