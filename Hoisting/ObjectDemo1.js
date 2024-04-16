// ObjectData is nothing but a user defined value 
// we can use any name for it 
// this will represent the properties inside the objects 
const ObjectData ={
    name : "samsung",
    Manufacturer : "S Korea",
    Price : 123334,
    wifi : true,
    wifi6 : null
}
// // retrieveing the data from
console.log(ObjectData.Price)
console.log(ObjectData.wifi)
// // // checking somethingnot available in the object
// console.log(ObjectData.model)
ObjectData.wifi = false
console.log('updated the value:', ObjectData)

// // // delete the item from the object
delete ObjectData.wifi

console.log('deleted the wifi:', ObjectData)

// // //add something inside the object
ObjectData.wifi = true
console.log('adding wifi back :', ObjectData)
// ObjectData.wifi = true

// // // // updating in object
// ObjectData.name = 'iphone'
// console.log(ObjectData)

// ObjectData.model ='SM-6734t276'
// console.log(ObjectData)