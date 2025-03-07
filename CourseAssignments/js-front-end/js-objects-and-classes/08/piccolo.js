function solve(commandsArr) {

    // let parkingLot = []
    //
    // for (let i = 0; i < commandsArr.length; i++) {
    //     let currentCommandInfo = commandsArr[i].split(', ');
    //     let command = currentCommandInfo[0];
    //     let carNumber = currentCommandInfo[1];
    //
    //     if (command === 'IN' && !parkingLot.includes(carNumber)) {
    //         parkingLot.push(carNumber);
    //     } else if (command === 'OUT' && parkingLot.includes(carNumber)) {
    //         parkingLot.splice(parkingLot.indexOf(carNumber), 1);
    //     }
    // }
    //
    // if (parkingLot.length !== 0) {
    //     console.log(parkingLot.sort((a, b) => a.localeCompare(b)).join('\n'));
    //     return;
    // }
    //
    // console.log('Parking Lot is Empty');

    // let parkingLot = {};
    //
    // for (const entry of commandsArr) {
    //     let [command, carNumber] = entry.split(', ');
    //
    //     if (command === 'IN') {
    //         parkingLot[carNumber] = true;
    //     } else if (command === 'OUT') {
    //         delete parkingLot[carNumber];
    //     }
    // }
    //
    // let sortedCars = Object.keys(parkingLot).sort((a, b) => a.localeCompare(b));
    //
    // console.log(sortedCars.length ? sortedCars.join('\n') : 'Parking Lot is Empty');

    let parkingLot = new Set();

    for (const entry of commandsArr) {
        let [command, carNumber] = entry.split(', ');

        if (command === 'IN') {
            parkingLot.add(carNumber);
        } else if (command === 'OUT') {
            parkingLot.delete(carNumber);
        }
    }

    let sortedCars = [...parkingLot].sort((a, b) => a.localeCompare(b));

    console.log(sortedCars.length ? sortedCars.join('\n') : 'Parking Lot is Empty');
}


// solve(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU']
// )

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);