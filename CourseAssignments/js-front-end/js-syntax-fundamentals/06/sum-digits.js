function solve(number) {
  let stringNumber = String(number);

  let sum = 0;
  for (const stringNumberElement of stringNumber) {
    sum += Number(stringNumberElement);
  }
  console.log(sum);
}

solve(543);
