function solve() {
    let inputElement = document.querySelector('textarea#input');
    const outputElement = document.querySelector('div#output');
    let sentences = inputElement.value.split('. ').map((x) => {
        if (!x.trim().endsWith('.')) {
            return  x.trim().concat('.')
        }
        return x.trim();
    });

    let formatedText = [];

    let iterations = Math.floor(sentences.length / 3);
    let startIndex = -1;
    let endIndex = -1;

    let lastUsedIndex = 0;
    for (let i = 0; i < iterations ; i++) {
        if(i === 0) {
            startIndex = 0;
            endIndex = i + 3;
        } else {
            startIndex = endIndex;
            endIndex = startIndex + 3;
        }
        let sliced = sentences.slice(startIndex, endIndex).join('');
        formatedText.push(`<p>${sliced}</p>`)
        console.log(sliced);

        if(i === iterations - 1) {
            lastUsedIndex = endIndex;
        }
    }

    if(lastUsedIndex < sentences.length) {
        let lastSentences = sentences.slice(lastUsedIndex).join('');
        formatedText.push(`<p>${lastSentences}</p>`)
        console.log(lastSentences);
    }
    outputElement.innerHTML = formatedText.join('');

}