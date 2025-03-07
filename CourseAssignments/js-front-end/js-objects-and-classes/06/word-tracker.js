function solve(wordsInput) {
    // let workingWordsArr = wordsInput.slice();
    // let wantedWords = workingWordsArr.shift().split(' ');
    //
    // let wordOcc = {}
    // for (let i = 0; i < wantedWords.length ; i++) {
    //     let word = wantedWords[i];
    //     wordOcc[word] = 0;
    // }
    //
    // for (let i = 0; i < workingWordsArr.length; i++) {
    //     let currentWord = workingWordsArr[i];
    //
    //     if(wordOcc.hasOwnProperty(currentWord)) {
    //         wordOcc[currentWord] = wordOcc[currentWord] + 1;
    //     }
    // }
    //
    //  Object.entries(wordOcc).sort((a, b) => b[1] - a[1]).forEach((entry) => {
    //      console.log(`${entry[0]} - ${entry[1]}`)
    //  });

    const [wantedWords, ...words] = wordsInput; // Extract first element as wanted words
    const wordOcc = Object.fromEntries(wantedWords.split(" ").map(word => [word, 0])); // Initialize counts to 0

    words.forEach(word => {
        if (wordOcc[word] !== undefined) wordOcc[word]++; // Update count if word exists
    });

    Object.entries(wordOcc)
        .sort(([, countA], [, countB]) => countB - countA) // Sort by count (descending)
        .forEach(([word, count]) => console.log(`${word} - ${count}`));
}


solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)

console.log('----------');
console.log('----------');

solve([
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
)