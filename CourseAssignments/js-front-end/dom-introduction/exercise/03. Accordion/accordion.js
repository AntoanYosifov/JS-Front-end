function toggle() {
    let buttonElement = document.querySelector('.head span.button');
    let buttonText = buttonElement.textContent;
    let extraDivElement = document.getElementById('extra');

    if(buttonText === 'More') {
        buttonElement.textContent = 'Less';
        extraDivElement.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        extraDivElement.style.display = 'none';
    }

}