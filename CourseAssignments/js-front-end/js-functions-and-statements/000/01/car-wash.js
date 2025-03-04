function carWash(commands) {

  // let value = 0;
  //
  // for (let i = 0; i < commands.length; i++) {
  //     let command = commands[i];
  //
  //     switch (command) {
  //       case 'soap':
  //         value += 10;
  //         break;
  //       case 'water':
  //         value = value + (value * 0.20);
  //         break;
  //       case 'vacuum cleaner':
  //         value = value + (value * 0.25);
  //         break;
  //       case 'mud':
  //         value = value * 0.90;
  //         break;
  //     }
  // }
  //
  // console.log(`The car is ${value.toFixed(2)}% clean.`);
  //
  // let result = commands.reduce((value, command) => {
  //   switch (command) {
  //     case 'soap': return value + 10;
  //     case 'water': return value * 1.20;
  //     case 'vacuum cleaner': return value * 1.25;
  //     case 'mud': return value * 0.90;
  //   }
  // }, 0);
  //
  // console.log(`The car is ${result.toFixed(2)}% clean.`);

  let actions = {
    'soap': (x) => x + 10,
    'water': (x) => x * 1.20,
    'vacuum cleaner': (x) => x * 1.25,
    'mud': (x) => x * 0.90
  };

  let value = 0;

  for (let command of commands) {
    value = actions[command](value);
  }

  console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
