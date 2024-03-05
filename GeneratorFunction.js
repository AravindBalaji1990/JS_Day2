function* sample(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const numberofgenerator=sample();
for(const data of numberofgenerator){
    console.log(data)
}