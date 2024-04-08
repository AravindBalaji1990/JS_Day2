// concept - apply(), bind() and call()
// in all thebelow context null will serve as this
// these above methods/fucnitons - these are keywords available in js which manipulate the functions

//apply - this usually woirks with this value and anarrayor arraylike objects

// function consoleFunc(data){
//     console.log(`this is a example ${data}`)
    
// }
// consoleFunc.apply(null,["sample"])

//bind - creates a new function that can be called using this keyword  set the provided value witht he given sequenece if argumnets
// function consoleFunc(data){
//     console.log(`this is a example ${data}`)
    
// }
// var data = consoleFunc.bind(null,'sample1')
// data()

//calls - arguments will be individually provided
function consoleFunc(data){
         console.log(`${data}, ${this.name}`)
        
 }
const dataname = {name:"sam"}
 consoleFunc.call(dataname,'sample2')