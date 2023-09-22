// function as a expression example 1
// const count = function(array) { // Function expression
//     return array.length;
//   }
//   console.log(count([5, 7, 8])); // => 3
  

  // function as a expression example 2
  const methods = {
    numbers: [1, 5, 8],
    sum: function() { // Function expression
      return this.numbers.reduce(function(acc, num) { // func. expression
        return acc + num;
      });
    }
  }
  console.log(methods.sum()); // => 14

// const name = (function(variable ){return typeof variable;}).name
// console.log(name); // return ''
// console.log(typeof name); // return ''

// const add = (a) => a+100;
// console.log(add(2))

// let ans = function(a){
//   return typeof(a)
//   }
// console.log(ans);
  
  