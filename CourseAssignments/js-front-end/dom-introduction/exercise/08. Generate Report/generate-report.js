function solve() {
    let checkboxes = document.querySelectorAll('thead input[type=checkbox]');
    let tableRows = document.querySelectorAll('tbody tr');

    let checkedBoxesNames = []
    let checkedBoxesIndices = []
    checkboxes.forEach((box, index) => {
        if(box.checked) {
            checkedBoxesNames.push(box.name);
            checkedBoxesIndices.push(index)
        }
    });

    let allRowData = [];
    tableRows.forEach(row => {
        let rowData = [];
        checkedBoxesIndices.forEach(index => {
            rowData.push(row.children[index].textContent.trim())
        });
        allRowData.push(rowData);
    });

    let reportArr = [];
    for (let i = 0; i < allRowData.length; i++) {
        let currentInfo = allRowData[i];

        let currentInfoObj = {};
        for (let j = 0; j < currentInfo.length; j++) {
            currentInfoObj[checkedBoxesNames[j]] = currentInfo[j];
        }

        reportArr.push(currentInfoObj)
    }

    document.querySelector('textarea#output').value = JSON.stringify(reportArr);
}