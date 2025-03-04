function numberModification(number) {

  let numberArr = [...String(number)].map(Number);

  let average = numberArr.reduce((acc, value) => acc + value, 0) / numberArr.length;

  while (average <= 5) {
    numberArr.push(9);
    average = numberArr.reduce((acc, value) => acc + value, 0) / numberArr.length;
  }

  console.log(Number(numberArr.join('')));

}

numberModification(101);
numberModification(5835);

