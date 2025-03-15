function addItem() {
    const itemsElement = document.getElementById('items');
    const newItemText = document.querySelector('#newItemText');

    console.log(newItemText.value);
    const newLiElement = document.createElement('li');
    const newAnchorElement = document.createElement('a');
    newAnchorElement.href = '#';
    newAnchorElement.textContent = '[Delete]'

    newAnchorElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    })

    newLiElement.textContent = newItemText.value;
    newLiElement.appendChild(newAnchorElement);
    itemsElement.appendChild(newLiElement);


    newItemText.value = '';
}