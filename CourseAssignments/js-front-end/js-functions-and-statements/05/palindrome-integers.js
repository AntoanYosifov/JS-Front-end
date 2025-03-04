function isPalindrome(integers) {

  for (let i = 0; i < integers.length; i++) {
      let number = integers[i];
      let reversedNumber = 0;

      while (number > 0) {
        let lastDigit = number % 10;
        reversedNumber = reversedNumber * 10 + lastDigit;
        number = Math.trunc(number / 10);
      }

    console.log(integers[i] === reversedNumber);
  }
}


isPalindrome([123,323,421,121]);
console.log('-------');
isPalindrome([32,2,232,1010]);
