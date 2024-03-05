// function data(name,lastname,time, callback){
//     const message = `hello, ${name} ${lastname}`
//     callback(time, message)
// }

// function display(time,message){
//     console.log(time + message )
// }

// data("sam","john","Good ", display)

function data(callback){
    const say  =callback()
    console.log(say)
}
function timevalidation(){
    const currtime = new Date().getHours()
    const whattosay = currtime<12  ? "Good Morning": "Good NIght"
    return whattosay
}
data(timevalidation)