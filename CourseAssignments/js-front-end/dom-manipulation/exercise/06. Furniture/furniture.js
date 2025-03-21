document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputFormEl = document.getElementById('input');
    const shopFormEl = document.getElementById('shop');

    shopFormEl.querySelector('tbody tr:first-child td:last-child input').disabled = false;

    const tableEl = shopFormEl.querySelector('table');

    inputFormEl.addEventListener('submit', handleGenerate);
    shopFormEl.addEventListener('submit', handleBuy);

    function handleGenerate(e) {
        e.preventDefault();
        const furnitureObjArr = JSON.parse(e.currentTarget.querySelector('textarea').value);
        const tableBodyEl = tableEl.querySelector('tbody');

        furnitureObjArr.forEach((el) => {
            const newTrEl = document.createElement('tr');
            const tdElsObj = {}
            for (const elKey in el) {
                const newTdEl = document.createElement('td');

                switch (elKey) {
                    case 'name':
                        const paragraphNameElement = document.createElement('p');
                        paragraphNameElement.textContent = el[elKey];
                        newTdEl.appendChild(paragraphNameElement);
                        break;
                    case 'img':
                        const htmlImageElement = document.createElement('img');
                        htmlImageElement.src = el[elKey];
                        newTdEl.appendChild(htmlImageElement);
                        break;
                    case 'price':
                        const paragraphPriceElement = document.createElement('p');
                        paragraphPriceElement.textContent = String(el[elKey]);
                        newTdEl.appendChild(paragraphPriceElement);
                        break;
                    case 'decFactor':
                        const paragraphFactorElement = document.createElement('p');
                        paragraphFactorElement.textContent = String(el[elKey]);
                        newTdEl.appendChild(paragraphFactorElement);
                        break;
                }

                tdElsObj[elKey] = newTdEl;
            }

            newTrEl.appendChild(tdElsObj['img']);
            newTrEl.appendChild(tdElsObj['name']);
            newTrEl.appendChild(tdElsObj['price']);
            newTrEl.appendChild(tdElsObj['decFactor']);

            const tdCheckBoxEl = document.createElement('td');

            const inputCheckBoxEl = document.createElement('input')
            inputCheckBoxEl.type = 'checkbox';

            tdCheckBoxEl.appendChild(inputCheckBoxEl);
            newTrEl.appendChild(tdCheckBoxEl);

            tableBodyEl.appendChild(newTrEl);
        });
    }

    function handleBuy(e) {
        e.preventDefault();

        const boughtFurnitureNames = getColumnData('Name');

        const boughtFurniturePrices = getColumnData('Price');
        const totalPrice = boughtFurniturePrices.reduce((acc, price) => Number(price) + acc, 0);

        const decorationFactors = getColumnData('Decoration factor');
        const totalDecFactor = decorationFactors.reduce((acc, factor) => Number(factor) + acc, 0);
        const averageDecFactor = totalDecFactor / decorationFactors.length;

        const resultElement = shopFormEl.querySelector('textarea');

        resultElement.value += `Bought furniture: ${boughtFurnitureNames.join(', ')}\n`;
        resultElement.value += `Total price: ${totalPrice}\n`;
        resultElement.value += `Average decoration factor: ${averageDecFactor}`;
    }

    function getColumnData(columnName) {
        const headers = Array.from(tableEl.querySelectorAll('thead th'));

        const columnIndex = headers.findIndex(th => th.textContent.trim() === columnName);

        if(columnIndex === -1) {
            return [];
        }

        const checkedRows = Array.from(tableEl.querySelectorAll('tbody tr'))
            .filter(row => row.querySelector('td input[type=checkbox]:checked'));

        return checkedRows.map(row => row.children[columnIndex].textContent.trim());
    }
}