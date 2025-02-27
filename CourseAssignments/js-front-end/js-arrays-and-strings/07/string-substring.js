function solve(word, text) {
  let lowerCaseWord = word.toLowerCase();
  let lowerCaseText = text.toLowerCase();

  let lowerCaseTextArray = lowerCaseText.split(' ');

  if(lowerCaseTextArray.includes(lowerCaseWord)) {
    console.log(lowerCaseWord);
  } else {
    console.log(`${lowerCaseWord} not found!`)
  }

}


solve('python',
  'JavaScript is the best programming language'
);

