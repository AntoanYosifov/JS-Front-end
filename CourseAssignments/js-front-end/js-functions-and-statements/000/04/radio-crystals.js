// function radioCrystals(crystalsInfo) {
//
//     let [desiredThickness, ...chunks] = crystalsInfo;
//
//     let operations = {
//         cut: (x) => x / 4,
//         lap: (x) => x * 0.80,
//         grind: (x) => x - 20,
//         etch: (x) => x - 2,
//         xray: (x) => x + 1,
//         transportingAndWashing: (x) => Math.floor(x)
//     }
//
//     let operationsArr = ['cut', 'lap', 'grind', 'etch'];
//
//     for (let i = 0; i < chunks.length; i++) {
//
//         let operationsPerformed = {};
//         let currentChunkThickness = chunks[i];
//         console.log(`Processing chunk ${currentChunkThickness} microns`)
//
//         while (currentChunkThickness !== desiredThickness) {
//             for (let j = 0; j < operationsArr.length; j++) {
//
//                 let currentOperation = operationsArr[j];
//                 if(currentChunkThickness === desiredThickness) {
//                     break;
//                 }
//
//                 if((operations[currentOperation](currentChunkThickness)) < desiredThickness - 1) {
//                     continue;
//                 } else if((operations[currentOperation](currentChunkThickness)) === desiredThickness - 1) {
//                     currentChunkThickness = operations[currentOperation](currentChunkThickness);
//                     currentChunkThickness = operations['xray'](currentChunkThickness);
//                     break;
//                 }
//                 while (currentChunkThickness > desiredThickness) {
//                     if((operations[currentOperation](currentChunkThickness)) < desiredThickness - 1) {
//                         break;
//                     }
//                     currentChunkThickness = operations[currentOperation](currentChunkThickness);
//
//                     operationsPerformed[currentOperation] = (operationsPerformed[operationsArr[j]] || 0) + 1;
//                     if(currentChunkThickness === desiredThickness - 1) {
//
//                         currentChunkThickness = operations['xray'](currentChunkThickness);
//                         operationsPerformed['xray'] = (operationsPerformed['xray'] || 0) + 1;
//                         break;
//                     }
//                 }
//                 currentChunkThickness = operations['transportingAndWashing'](currentChunkThickness);
//             }
//
//         }
//
//         for (let key in operationsPerformed) {
//             let formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
//
//             if(key !== 'xray') {
//                 console.log(`${formattedKey} x${operationsPerformed[key]}`);
//                 console.log('Transporting and washing');
//             } else {
//                 const xRayStr = 'X-ray';
//                 console.log(`${xRayStr} x${operationsPerformed[key]}`);
//             }
//
//         }
//         console.log(`Finished crystal ${currentChunkThickness} microns`);
//     }
//
// }
//
// // radioCrystals([1375, 50000]);
// radioCrystals([1000, 4000, 8100]);

function radioCrystals(crystalsInfo) {
    let [desiredThickness, ...chunks] = crystalsInfo;

    let operations = {
        cut: (x) => x / 4,
        lap: (x) => x * 0.80,
        grind: (x) => x - 20,
        etch: (x) => x - 2,
        xray: (x) => x + 1,
        transportingAndWashing: (x) => Math.floor(x)
    };

    let operationsArr = ['cut', 'lap', 'grind', 'etch'];

    for (let i = 0; i < chunks.length; i++) {
        let operationsPerformed = {};
        let currentChunkThickness = chunks[i];
        console.log(`Processing chunk ${currentChunkThickness} microns`);

        for (let operation of operationsArr) {
            let count = 0;

            while (operations[operation](currentChunkThickness) >= desiredThickness - 1) {
                currentChunkThickness = operations[operation](currentChunkThickness);
                count++;
            }

            if (count > 0) {
                operationsPerformed[operation] = count;
                currentChunkThickness = operations['transportingAndWashing'](currentChunkThickness);
            }
        }

        if (currentChunkThickness === desiredThickness - 1) {
            currentChunkThickness = operations['xray'](currentChunkThickness);
            operationsPerformed['xray'] = 1;
        }

        for (let key in operationsPerformed) {
            let formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
            if (key !== 'xray') {
                console.log(`${formattedKey} x${operationsPerformed[key]}`);
                console.log('Transporting and washing');
            } else {
                console.log(`X-ray x${operationsPerformed[key]}`);
            }
        }

        console.log(`Finished crystal ${currentChunkThickness} microns`);
    }
}



