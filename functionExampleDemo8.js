//higher order function
// higher order funciton is nothing but a funciton uses another funciton as a argumnet

function demoExample(callback){
    console.log("executin higher order funciton")
    // i use a callback funciton in funciton parameter and call it back
    callback();
}

function addition(){
    console.log("this is a addition function")
}
demoExample(addition);