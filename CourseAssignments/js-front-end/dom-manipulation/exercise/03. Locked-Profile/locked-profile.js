document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const showMoreButtonEls = Array.from(document.querySelectorAll('div.profile button'));

    showMoreButtonEls.forEach(el => el.addEventListener('click', handleEvent));

    function handleEvent(e) {
        const profileElement = e.currentTarget.parentElement;
        const lockUnlockEls = Array.from(profileElement.querySelectorAll('div.radio-group input[type=radio]'));

        const checkedCommandEl = lockUnlockEls.filter(el => el.checked === true)[0];
        const command = checkedCommandEl.id.split(/user\d+/)[1];

        if(command === 'Lock') {
            return;
        }

        const hiddenDiv = profileElement.querySelector('div.hidden-fields');

        if(e.currentTarget.textContent === 'Show Less') {
            hiddenDiv.style.display = 'none';
            e.currentTarget.textContent = 'Show More';
        } else {
            hiddenDiv.style.display = 'block';
            e.currentTarget.textContent = 'Show Less';
        }
    }
}