function solve() {
    let inputText = document.getElementById('text').value.toLowerCase();
    let currentCase = document.getElementById('naming-convention').value;

    let clearCommand = currentCase.replace(/\s+/g, "").toLowerCase();

    let words = inputText.split(' ');
    let transformed = '';
    switch (clearCommand) {
        case 'camelcase':
            for (let i = 1; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].slice(1);
            }
            transformed = words.join('');
            break
        case 'pascalcase':
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].slice(1);
            }
            transformed = words.join('');
            break
        default:
            transformed = 'Error!'
    }

    document.getElementById('result').textContent = transformed;
}