function solve(count, type, day) {
  let price;

  if (type === 'Students') {
    switch (day) {
      case 'Friday':
        price = 8.45;
        break;
      case 'Saturday':
        price = 9.80;
        break;
      case 'Sunday':
        price = 10.46;
        break;
      default:
        console.log('Invalid input!');
    }
  } else if (type === 'Business') {
    switch (day) {
      case 'Friday':
        price = 10.90;
        break;
      case 'Saturday':
        price = 15.60;
        break;
      case 'Sunday':
        price = 16.00;
        break;
      default:
        console.log('Invalid input!');
    }
  } else if (type === 'Regular') {
    switch (day) {
      case 'Friday':
        price = 15.00;
        break;
      case 'Saturday':
        price = 20.00;
        break;
      case 'Sunday':
        price = 22.50;
        break;
      default:
        console.log('Invalid input!');
    }
  }

  if(!price) {
    console.log('Invalid input');
  }

  let totalPrice = count * price;

  if(type === 'Students' && count >= 30) {
    totalPrice = totalPrice - (totalPrice * 0.15);
  }

  if(type === 'Business' && count >= 100) {
    totalPrice = totalPrice - (price * 10);
  }

  if(type === 'Regular' && count >= 10 && count <=20) {
    totalPrice = totalPrice - (totalPrice * 0.05);
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

