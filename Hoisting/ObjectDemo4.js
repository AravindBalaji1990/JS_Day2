// iterate through the objects
// const mydata = {}
// for (let key in {prop1:"val1",prop2:2}){
//     mydata[key] = mydata[key]
// }

// console.log(mydata)

// iterate the values inside the objects
const mydata1 ={
    prop1:"val1",prop2:2
}

for(let key in mydata1){
    if(mydata1.hasOwnProperty(key)){
        const val = mydata1[key]
        console.log(val)
    }
}