function solve(namesArray) {

  let sorted = namesArray.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < sorted.length; i++) {
    console.log((i + 1) + '.' + sorted[i]);
  }

}

solve([]);
