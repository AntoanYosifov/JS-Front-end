document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const sudokuFormEl = document.getElementById('solutionCheck');
    const resultParagraphEl = document.getElementById('check');

    const tableEl = sudokuFormEl.querySelector('table');

    // const tableBorderDefaultStyle = getComputedStyle(tableEl).border;

    sudokuFormEl.addEventListener('submit', handleQuickCheck);
    sudokuFormEl.addEventListener('reset', handleClear);

    function handleQuickCheck(e) {
        e.preventDefault();
        const tRows = Array.from(sudokuFormEl.querySelectorAll('tbody tr'));

        const rowsData = tRows.map(row => Array.from(row.querySelectorAll('td input')).map(input => Number(input.value.trim()))
        );

        const columnData = rowsData[0].map((_, colIndex) => {
            return rowsData.map(row => row[colIndex]);
        });

       const isValid = rowsData.every(hasUniqueNumber) && columnData.every(hasUniqueNumber);

        if (isValid) {
            tableEl.style.border = '2px solid green';
            resultParagraphEl.textContent = 'Success!';
        } else {
            tableEl.style.border = '2px solid red';
            resultParagraphEl.textContent = 'Keep trying ...';
        }
    }

    function handleClear(e) {
        // tableEl.style.border = tableBorderDefaultStyle;
        resultParagraphEl.textContent = '';
        e.default;
    }

    function hasUniqueNumber(arr) {
        return new Set(arr).size === arr.length;
    }
}