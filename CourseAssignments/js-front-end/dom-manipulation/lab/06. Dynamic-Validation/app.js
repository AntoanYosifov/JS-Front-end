function validate() {
    const emailInputElement = document.getElementById('email');
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/
    emailInputElement.addEventListener('change', (e) => {
        if (!pattern.test(e.currentTarget.value)) {
            return e.currentTarget.classList.add('error');
        }
        e.currentTarget.classList.remove('error');
    });
}