function solve(currentStock, orderedStock) {
    //
    // let stockInfo = {}
    //
    // for (let i = 0; i < currentStock.length - 1; i += 2) {
    //     let stockName = currentStock[i];
    //     let stockQnt = currentStock[i + 1];
    //     stockInfo[stockName] = Number(stockQnt);
    // }
    //
    // for (let i = 0; i < orderedStock.length - 1; i += 2) {
    //     let stockName = orderedStock[i];
    //     let stockQnt = orderedStock[i + 1];
    //
    //     if(stockInfo.hasOwnProperty(stockName)) {
    //         stockInfo[stockName] = stockInfo[stockName] + Number(stockQnt);
    //         continue;
    //     }
    //
    //     stockInfo[stockName] = Number(stockQnt);
    // }
    //
    // Object.entries(stockInfo).forEach(([name, qnt]) => console.log(`${name} -> ${qnt}`))
    const parseStock = (arr) =>
        arr.reduce((acc, _, i) => {
            if (i % 2 === 0) acc[arr[i]] = (acc[arr[i]] || 0) + Number(arr[i + 1]);
            return acc;
        }, {});

    const stockInfo = parseStock(currentStock);
    const orderedInfo = parseStock(orderedStock);

    for (const [product, quantity] of Object.entries(orderedInfo)) {
        stockInfo[product] = (stockInfo[product] || 0) + quantity;
    }

    Object.entries(stockInfo).forEach(([name, qnt]) => console.log(`${name} -> ${qnt}`));

}

solve([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);