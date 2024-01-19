// Yield with promise and async
function* asyncwithgenerator(){
    yield 1;
    yield new Promise((resolve)=> setTimeout(()=> resolve(2),3000))
    yield 3;
}
async function runGenerator(){
    const iterator = asyncwithgenerator();
    console.log(iterator.next().value);

    const result = await iterator.next().value;

    console.log(result)
    console.log(iterator.next().value)
}

runGenerator()