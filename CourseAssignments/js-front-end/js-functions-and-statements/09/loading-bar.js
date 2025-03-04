function loadingBar(percentage) {
  let progressReached = percentage / 10;

  let progressBarArr = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];

  for (let i = 0; i < progressReached; i++) {
    progressBarArr[i] = '%';
  }

  progressBarArr.unshift('[');
  progressBarArr.push(']');

  if (progressReached < 10) {
    progressBarArr.unshift(' ');
    progressBarArr.unshift(`${percentage}%`)
    progressBarArr.push('\n');
    progressBarArr.push('Still loading...');
  } else {
    progressBarArr.unshift('\n');
    progressBarArr.unshift('100% Complete!');
  }

  console.log(progressBarArr.join(''));
}


loadingBar(30);
console.log('------');
loadingBar(50);
console.log('------');
loadingBar(100);

