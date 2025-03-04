function oddEvenSum(number) {
  let workingNumber = number;

  let oddSum = 0;
  let evenSum = 0;

  while (workingNumber > 0) {
    let lastDigit = workingNumber % 10;
    workingNumber = Math.trunc(workingNumber / 10);

    if (lastDigit % 2 === 0) {
      evenSum += lastDigit;
    } else {
      oddSum += lastDigit;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);
