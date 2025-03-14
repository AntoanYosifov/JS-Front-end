function addItem() {
    const itemsElement = document.getElementById('items')
    const inputElement = document.getElementById('newItemText');

    const itemText = inputElement.value;

    const newLiElement = document.createElement('li');
    newLiElement.textContent = itemText;

    itemsElement.appendChild(newLiElement);

    inputElement.value = '';
}