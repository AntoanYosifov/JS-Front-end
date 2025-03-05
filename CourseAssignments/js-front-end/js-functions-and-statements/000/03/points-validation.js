function pointsValidation(points) {
  let [x1, y1, x2, y2] = points;
  //
  // let firstPointResult =  Math.pow((x1 - 0), 2) + Math.pow((y1 - 0), 2);
  // let firstPointStartDistance = Math.sqrt(firstPointResult);
  //
  // let secondPointResult = Math.pow((x2 - 0), 2) + Math.pow((y2 - 0), 2);
  // let secondPointStartDistance = Math.sqrt(secondPointResult);
  //
  // let pointsResult = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
  // let distanceBetweenPoints = Math.sqrt(pointsResult);
  //
  // if(Number.isInteger(firstPointStartDistance)) {
  //   console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  // } else {
  //   console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  // }
  //
  // if(Number.isInteger(secondPointStartDistance)) {
  //   console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  // } else {
  //   console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  // }
  //
  // if(Number.isInteger(distanceBetweenPoints)) {
  //   console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  // } else {
  //   console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  // }

  function isValidDistance(x1, y1, x2, y2) {
    return Number.isInteger(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
  }

  console.log(`{${x1}, ${y1}} to {0, 0} is ${isValidDistance(x1, y1, 0, 0) ? 'valid' : 'invalid'}`);
  console.log(`{${x2}, ${y2}} to {0, 0} is ${isValidDistance(x2, y2, 0, 0) ? 'valid' : 'invalid'}`);
  console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValidDistance(x1, y1, x2, y2) ? 'valid' : 'invalid'}`);
}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);
