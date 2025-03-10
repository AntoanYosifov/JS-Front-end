function extractText() {
    let ulElement = document.getElementById('items');
    let resultElement = document.getElementById('result');

    let textResult = ulElement.textContent
        .split('\n')
        .map(row => row.trim())
        .join('\n')
        .trim();

    resultElement.textContent = textResult;
}