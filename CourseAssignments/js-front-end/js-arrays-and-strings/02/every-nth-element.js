function solve(array, step) {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {

    if(i % step === 0) {
      resultArray.push(array[i]);
    }

  }
  return resultArray;
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
  2
));

console.log(solve(['dsa',
    'asd',
    'test',
    'tset'],
  2
));

console.log(solve(['1',
    '2',
    '3',
    '4',
    '5'],
  6
));
