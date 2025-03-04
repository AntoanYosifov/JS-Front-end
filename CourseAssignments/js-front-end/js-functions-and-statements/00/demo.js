// function recursivePower(base, radix) {
//   console.log()
//   if(radix === 1) {
//     return base;
//   }
//   console.log()
//   let result = base * recursivePower(base, radix - 1);
//   console.log(result);
//   return result;
// }
//
// console.log(recursivePower(2, 8));


const fruits = ["apple", "banana", "apple", "orange", "banana", "banana"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);




