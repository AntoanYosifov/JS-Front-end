function colorize() {
    let tableRowElements = document.querySelectorAll('table tbody tr:nth-child(even)');
    tableRowElements.forEach(el => el.style.backgroundColor = 'teal');
}