function solve(numberArray) {
  let sortedCopy =  [...numberArray].sort((a, b) => a - b);

  let sortedNumbers = [];

  while(true) {
    if(sortedCopy.length === 0) {
      break
    }

    sortedNumbers.push(sortedCopy.shift());
    if(sortedCopy[sortedCopy.length - 1]) {
      sortedNumbers.push(sortedCopy.pop());
    }

  }

  return sortedNumbers;

}


solve([1, 65, 3, 52, 48, 63, 31, -3, 18]);
