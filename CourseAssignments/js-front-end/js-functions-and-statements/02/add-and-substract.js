function addAndSubstract(first, second, third) {
  function add(a, b) {
    return a + b;
  }

  function substract(additionResult, c) {
    return additionResult - c;
  }

  console.log(substract(add(first, second), third));
}

addAndSubstract(23, 6, 10);
addAndSubstract(1, 17, 30);
addAndSubstract(42, 58, 100);
