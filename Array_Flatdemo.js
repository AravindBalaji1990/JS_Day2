// flat work with default value => 1
//                  0  1     2    0
// const nestedarray1 =[1,[2,3],[4,5,[6,7]]]
// const data1 =nestedarray1.flat(2) // default it takes 1
// console.log(data1)


//if the depth is 2
//                 0  1  2  3  4
const nestedarray =[1,[2,[3,[4,[5]]]]]
const data =nestedarray.flat(Infinity) 
console.log(data)// 1,2,3[4,[5]]