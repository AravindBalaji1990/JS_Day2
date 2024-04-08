// syntax for generator function
// function* followed by name of the function that we provide
function* range(start, end , step){
    // i=i+step
    for(let i = start ; i<= end ;i+=step){
        yield i;
    }
}
const mydata = range(5,10,2);

for(const value of mydata){
console.log(value)
}
