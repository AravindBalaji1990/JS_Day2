const firstmethod= ()=>{
    console.log("firstmethod")
}

const secondethod= ()=>{
    console.log("secondmethod")
}

firstmethod = secondethod

// io call the first method inorder to execute the second method
firstmethod()