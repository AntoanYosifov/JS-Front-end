function solve(base, increment) {
  let iterations = base;

  let counter = 1;

  let totalStone = 0;
  let totalMarble = 0;
  let totalLapisLazuli = 0;
  let totalGold = 0;

  while (iterations > 0) {

    if((iterations - 2) <= 0) {
      let currentGold = (iterations * iterations) * increment;
      totalGold += currentGold;
      break;
    }

    let currentStone = ((iterations - 2) * (iterations - 2)) * increment;
    totalStone += currentStone;

    let outerLayer = (4 * (iterations - 1)) * increment;
    if(counter % 5 === 0) {
      totalLapisLazuli += outerLayer;
    } else {
      totalMarble += outerLayer;
    }

    counter++;
    iterations -= 2;
  }

  console.log(`Stone required: ${Math.ceil(totalStone)}`);
  console.log(`Marble required: ${Math.ceil(totalMarble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(totalGold)}`);
  console.log(`Final pyramid height: ${Math.floor(counter * increment)}`)
}


solve(11, 1);
console.log('--------');

solve(11,
  0.75
);

console.log('--------');
solve(23,
  0.5
);
