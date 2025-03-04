function charactersInRange(charOne, charTwo) {
  let start = Math.min(charOne.charCodeAt(0), charTwo.charCodeAt(0));
  let end = Math.max(charOne.charCodeAt(0), charTwo.charCodeAt(0));

  let middleCharsArr = [];

  for (let i = start + 1; i < end; i++) {
    middleCharsArr.push(String.fromCharCode(i))
  }
  console.log(middleCharsArr.join(' '));
}





charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');
