document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const selectElement = document.getElementById('menu');
    const formElement = document.querySelector('form');

    formElement.addEventListener('submit', handleEvent);

    function handleEvent(e) {
        e.preventDefault();

        const newItemTextEl = e.currentTarget.querySelector('input#newItemText');
        const newItemValueEl = e.currentTarget.querySelector('input#newItemValue');

        const optionToADd = document.createElement('option');
        optionToADd.textContent = newItemTextEl.value;
        optionToADd.value = newItemValueEl.value;

        selectElement.appendChild(optionToADd);

        newItemTextEl.value = '';
        newItemValueEl.value = '';
    }
}