document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const questionSectionEls = Array.from(document.querySelectorAll('section.question'));

    questionSectionEls.forEach(questionEl => questionEl.addEventListener('click', handleClick));
    const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']

    const correct = [];
    const incorrect = [];

    function handleClick(e) {
        if (e.target.tagName !== 'LI') {
            return;
        }

        const chosenAnswer = e.target.textContent.trim();

        if (correctAnswers.includes(chosenAnswer)) {
            correct.push(chosenAnswer);
        } else {
            incorrect.push(chosenAnswer);
        }

        const currentSectionEl = e.currentTarget;
        if (currentSectionEl.matches(':last-of-type')) {
            currentSectionEl.classList.add('hidden');
            currentSectionEl.style.display = 'none';

            const newUlElement = document.createElement('ul');
            const newLiElement = document.createElement('li');

            const resultsDivEl = document.getElementById('results');
            const h1Element = document.querySelector('h1');

            if (incorrect.length === 0) {
                newLiElement.textContent = 'You are recognized as top JavaScript fan!';
            } else {
                if (correct.length === 1) {
                    newLiElement.textContent = `You have ${correct.length} right answer`;
                } else {
                    newLiElement.textContent = `You have ${correct.length} right answers`;
                }
            }

            newUlElement.appendChild(newLiElement);
            resultsDivEl.appendChild(newUlElement);

            h1Element.appendChild(resultsDivEl);

        } else {
            currentSectionEl.classList.add('hidden');
            currentSectionEl.style.display = 'none';

            const nextQuestionSectionEl = currentSectionEl.nextElementSibling;
            nextQuestionSectionEl.classList.remove('hidden');
            nextQuestionSectionEl.style.display = 'block';
        }
    }
}