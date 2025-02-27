function solve(words, template) {
  let wordsArray = words.split(', ');
  for (let i = 0; i < wordsArray.length; i++) {
    let currentWord = wordsArray[i];
    let strToReplace = '*'.repeat(currentWord.length);
    template = template.replace(strToReplace, currentWord);

  }
  console.log(template);
}



solve('great',
  'softuni is ***** place for learning new programming languages'
);

solve('great, learning',
  'softuni is ***** place for ******** new programming languages'
);
