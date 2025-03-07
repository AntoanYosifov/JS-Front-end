function solve(input) {
    input.map(value => value.split(' | ')).reduce((acc, infoArray) => {
        let town = infoArray[0];
        let latitude = Number(infoArray[1]).toFixed(2);
        let longitude = Number(infoArray[2]).toFixed(2);
        let currentTownInfo = {
            town,
            latitude,
            longitude,
        }
        acc.push(currentTownInfo);
        return acc;
    }, []).forEach(info => console.log(info));

}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)