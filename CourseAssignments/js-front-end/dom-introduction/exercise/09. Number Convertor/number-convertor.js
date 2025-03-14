function solve() {
    const selectElement = document.getElementById('selectMenuTo');
    const numberToConvert = Number(document.querySelector('input[type=number]#input').value);

    const convertTo = selectElement.value;

    function convertNumber(number, command) {
        switch (command) {
            case 'binary':
                return number.toString(2);

            case 'hexadecimal':
                return number.toString(16).toUpperCase();
        }
    }
    document.getElementById('result').value = convertNumber(numberToConvert, convertTo);
}