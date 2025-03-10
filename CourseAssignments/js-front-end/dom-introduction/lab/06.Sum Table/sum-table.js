function sumTable() {
     // let sum = Array.from(document.querySelectorAll('table tbody tr td:last-of-type:not(#sum)'))
     //    .reduce((sum, priceElement) => sum + Number(priceElement.textContent) , 0);

    document.getElementById('sum').textContent = Array.from(document.querySelectorAll('table tbody tr td:last-of-type:not(#sum)'))
        .reduce((sum, priceElement) => sum + Number(priceElement.textContent) , 0);

}