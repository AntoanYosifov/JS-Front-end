function printSmallestNumber(a, b, c) {
  let smallestNumber = a;

  if(b < smallestNumber) {
    smallestNumber = b;
  }
  if(c < smallestNumber) {
    smallestNumber = c;
  }

  console.log(smallestNumber);
}


printSmallestNumber(2,5,3);
printSmallestNumber(600, 342, 123);
printSmallestNumber(2,2,2);
