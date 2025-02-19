function solve(startNumber, endNumber) {
  let log = '';
  let sum = 0;
  for (let i = startNumber; i <= endNumber; i++) {
    sum += i;
    log += i + ' ';
  }

  console.log(log);
  console.log('Sum: ' + sum);

}

solve(5, 10);
