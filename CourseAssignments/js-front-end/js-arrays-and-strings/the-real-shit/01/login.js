function solve(arrayTokens) {
  for (let i = 1; i < arrayTokens.length; i++) {
    let username = arrayTokens[0];

    if(username !== arrayTokens[i].split('').reverse().join('')) {
      if(i === 4) {
        console.log(`User ${username} blocked!`)
        break;
      }
      console.log('Incorrect password. Try again.');
    } else {
      console.log(`User ${username} logged in.`)
    }

  }
}

solve(['Acer','login','go','let me in','recA']);
solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);

