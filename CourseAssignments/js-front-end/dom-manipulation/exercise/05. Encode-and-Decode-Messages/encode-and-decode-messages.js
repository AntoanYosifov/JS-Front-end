document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const encodeFormEl = document.getElementById('encode');
    const decodeFormEl = document.getElementById('decode');

    const encodeTextAreaEl = encodeFormEl.querySelector('textarea');
    const decodeTextAreaEl = decodeFormEl.querySelector('textarea');

    encodeFormEl.addEventListener('submit', (e) => {
        e.preventDefault();
        let messageToEncode = encodeTextAreaEl.value;

        let encodedMessage = messageToEncode
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
            .join('');

        encodeTextAreaEl.value = '';
        decodeTextAreaEl.value = encodedMessage;
    });

    decodeFormEl.addEventListener('submit', (e) => {
        e.preventDefault();

        decodeTextAreaEl.value = decodeTextAreaEl.value
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) - 1))
            .join('');
    });
}
