function solve (shiftsInfoArray) {

  if(shiftsInfoArray.length === 0) {
    return;
  }

  const bitCoinPrice = 11949.16;
  const goldPrice = 67.51;

  let firstBitCoinBoughtDay = 0;
  let bitCoinsBought = 0;
  let totalMoney = 0;
  for (let i = 0; i < shiftsInfoArray.length; i++) {
    let dayNumber = i + 1;
    let amountOfGoldMinedToday = shiftsInfoArray[i];

    if(dayNumber % 3 === 0) {
      amountOfGoldMinedToday = amountOfGoldMinedToday * 0.70;
    }

    let moneyEarnedToday = amountOfGoldMinedToday * goldPrice;

    totalMoney += moneyEarnedToday;

    if(totalMoney >= bitCoinPrice) {
      let bitCoinsBoughtToday = Math.floor(totalMoney / bitCoinPrice);

      bitCoinsBought += bitCoinsBoughtToday;

      totalMoney = totalMoney % (bitCoinsBoughtToday * bitCoinPrice);

      if(!firstBitCoinBoughtDay) {
        firstBitCoinBoughtDay = dayNumber;

      }
    }
  }

  console.log(`Bought bitcoins: ${bitCoinsBought}`);
  if(firstBitCoinBoughtDay !==0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitCoinBoughtDay}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)

}


// solve([]);
console.log('-----------------');
solve([50, 100]);
console.log('-----------------');
solve([3124.15, 504.212, 2511.124]);
console.log('-----------------');
