// the last function defined will overrride the old function
// named function
function additionFunc(){
    var a =1;
    b =2
    const result = a+b
    console.log(result)
}
additionFunc()// no numbera are avialble -> NAN

//named parameter function
// reusable function
function additionFunc(a,b){
    const result = a+b
    console.log(result)
}

additionFunc(1,2)
additionFunc(3,4)