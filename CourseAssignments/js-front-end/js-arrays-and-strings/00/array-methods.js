// Array methods

// Pop - remove last element (mutating)
let cars = ['BMW' , 'Audi', 'Mercedes', 'Toyota', 'Mazda'];
let lastCar = cars.pop();
console.log(lastCar);
console.log(cars);

// Push - add element at the end;
cars.push('Mitsubishi');
console.log(cars);

// Push multiple elements;
cars.push('Lada', 'Mosckvich', 'Jigula');
console.log(cars);

// Shift - remove first element
let firstCar = cars.shift();
console.log(firstCar);
console.log(cars);

// Unshift - add element at the beginning of the array
cars.unshift('Varburg');
console.log(cars);

// Splice - Remove element at position
cars.splice(2, 1);
console.log(cars);

cars.splice(2, 2);
console.log(cars);

// Splice - add element on specific position;
cars.splice(2, 0, 'Ferrari');
console.log(cars);

// Reverse
cars.reverse();
console.log(cars);

// NOT MUTATING
//Join array into a string
let result = cars.join(' ');
console.log(result);

// Slice
// Takes sub array
let middleCars = cars.slice(2, 5);
console.log(middleCars);

let endCars = cars.slice(4);
console.log(endCars);

let copyCars = cars.slice();
console.log(copyCars);

// Reverse without mutation
let reversed = cars.slice().reverse();
console.log(reversed);

// Check if element is present
console.log(cars.includes('Audi'));

// Check if element is present after a specific position
console.log(cars.includes('Jigula', 2));
console.log(cars.includes('Jigula', 0));

// IndexOF - find index of element;
const ferrariIndex = cars.indexOf('Ferrari');
console.log(ferrariIndex);

// Foreach
cars.forEach(el => console.log(el.toUpperCase()));


// Map
// Creates new array with values based on original values

const lowerCaseCars = cars.map(c => c.toLowerCase());
const lowerCaseCars2 = cars.map(function (car) {
  return car.toLowerCase();
})
lowerCaseCars.forEach(c => console.log(c));
lowerCaseCars2.forEach(c => console.log(c));


// Find - find the element
let carWithL = cars.find(c => c.startsWith('L'))
console.log('------------');
console.log(carWithL);

let carsWithM = cars.filter(c => c.startsWith('M'));
console.log(carsWithM);
