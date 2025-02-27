// Array literal
let names = ['Antoan', 'Dominika ', 'Frank'];

let empty = [];

// Mixed arrays
let mixed = ['Antoan', true, 20];

console.log(mixed);

// Dense array / Sparse array
let denseArr = [undefined, undefined, undefined];
let sparseArr = [];
sparseArr.length = 3;
console.log(denseArr.length === sparseArr.length);
console.log(denseArr);
console.log(sparseArr);

// Access elements
console.log(names[0]);
console.log(names[names.length - 1]);
console.log(names[30]);

// Sparse array demo
const largeArr = [];
largeArr[1000] = 'Something';
largeArr[1001] = 'Something Else';
largeArr[0] = 'First';
console.log(largeArr.length);
console.log(largeArr);
console.log(largeArr[1000]);
console.log(largeArr[999]);

// Set element
console.log(names[0]);
names[0] = 'Anastasia';
console.log(names[0]);
names[3] = 'David';
names[names.length] = 'Goggins';
console.log(names[3]);

// Array destructuring assigment

let [firstName, secondName, thirdName, fourthName] = names;

console.log(firstName);
console.log(secondName);
console.log(thirdName);
console.log(fourthName);
console.log(names);

// Partial destructuring

const [fName, sName] = names;
console.log(fName);
console.log(sName);

// Take the rest of the elements using rest operator
const [first, second, ...restNames] = names;
console.log(first);
console.log(second);
console.log(restNames);

// iterate array with for
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log('-----------');
// Iterate with for of
for(let name of names) {
  console.log(name);
}

