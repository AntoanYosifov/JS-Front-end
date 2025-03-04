function perfectOrNot(number) {
  let properPositiveDivisors = [];

  for (let i = 1; i < number; i++) {
    if(number % i === 0) {
      properPositiveDivisors.push(i);
    }
  }
  const sum = properPositiveDivisors.reduce((acc, num) => acc + num, 0);
  if(sum === number) {
    console.log('We have a perfect number!');
    return;
  }

  console.log('It\'s not so perfect.');
}

perfectOrNot(1236498);
