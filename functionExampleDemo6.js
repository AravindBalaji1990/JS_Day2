function* range(start, end , step){
    for(let i = start ; i<= end ;i+=step){
        yield i;
    }
}
const mydata = range(1,10,2);

for(const value of mydata){
console.log(value)
}
