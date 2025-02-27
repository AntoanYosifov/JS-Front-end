function solve(number, op1, op2, op3, op4, op5) {

  let base = Number(number);

  let options = Array.of(op1, op2, op3, op4, op5);

  for (const option of options) {

    switch (option) {
      case 'chop':
        base /= 2;
        break;
      case 'dice':
       base = Math.sqrt(base);
        break;
      case 'spice':
        base += 1;
        break;
      case 'bake':
        base *= 3;
        break;
      case 'fillet':
        base *= 0.80;
        break;
    }

    if(!Number.isInteger(base)) {
      console.log(base.toFixed(1));
      continue;
    }

    console.log(base);
  }
}


solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
