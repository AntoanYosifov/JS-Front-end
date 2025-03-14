function deleteByEmail() {
    const emailElements = document.querySelectorAll('table tbody tr td:last-child');
    const emailToDelete = document.querySelector('input[name=email]').value;
    const resultElement = document.getElementById('result');

    let isDeleted = false;

    emailElements.forEach(el => {
        if (el.textContent === emailToDelete.trim()) {
            el.parentElement.remove()
            isDeleted = true;
        }
    });

    if (isDeleted) {
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.'
    }
}

