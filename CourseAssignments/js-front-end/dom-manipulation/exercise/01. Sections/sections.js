document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const form = document.getElementById('task-input');
    const resultElement = document.getElementById('content');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const input = document.querySelector('input[type=text]').value.split(', ');

        input.forEach(el => {
            const parentDiv = document.createElement('div');
            const childParagraph = document.createElement('p');
            childParagraph.textContent = el;
            childParagraph.style.display = 'none';
            parentDiv.appendChild(childParagraph);

            parentDiv.addEventListener('click', (e) => {
                e.target.querySelector('p').style.display = 'block';
            })
            resultElement.appendChild(parentDiv);
        });
    });
}
