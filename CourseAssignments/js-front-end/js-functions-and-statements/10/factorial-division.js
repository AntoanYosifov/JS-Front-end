function factorialDivision(a, b) {

  function recursiveFactorial(number) {
    if(number === 1) {
      return number;
    }

    return  number *= recursiveFactorial(number - 1);
  }

  console.log((recursiveFactorial(a) / recursiveFactorial(b)).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);
