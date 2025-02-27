function solve(modernTimes) {
  let containsNonLetters = /[^a-zA-Z#]/;

  let modernTimesArray = modernTimes.split(' ');
  for (let i = 0; i < modernTimesArray.length; i++) {

    let currentWord = modernTimesArray[i];

    if(currentWord.length > 1) {
      if(!containsNonLetters.test(currentWord) && currentWord.startsWith('#')) {
        console.log(currentWord.replace('#', ''));
      }
    }
  }

}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
