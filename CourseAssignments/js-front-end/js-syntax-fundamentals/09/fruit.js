function solve(typeOfFruit, weightInGrams, priceOfKg) {

  let weightInKg = weightInGrams / 1000;

  let neededMoney = weightInKg * priceOfKg;

  console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`);
}

solve('apple', 1563, 2.35);

