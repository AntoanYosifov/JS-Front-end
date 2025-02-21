function solve(speed, area) {

  let speedLimit;

  switch (area) {
    case 'motorway':
      speedLimit = 130;
      break;
    case 'interstate':
      speedLimit = 90;
      break;
    case 'city':
      speedLimit = 50;
      break;
    case 'residential':
      speedLimit = 20;
      break;
  }

  if (speedLimit >= speed) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
  } else {
    let diff = speed -  speedLimit;
    let status;

    if (diff <= 20) {
      status = 'speeding';
    } else if (diff > 20 && diff <= 40) {
      status = 'excessive speeding';
    } else {
      status = 'reckless driving';
    }

    console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
  }

}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
