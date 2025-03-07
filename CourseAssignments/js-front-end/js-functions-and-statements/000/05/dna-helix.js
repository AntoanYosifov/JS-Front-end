function printDNA(n) {
    const sequence = "ATCGTTAGGG";
    let index = 0;

    for (let i = 0; i < n; i++) {
        let char1 = sequence[index % sequence.length];
        let char2 = sequence[(index + 1) % sequence.length];
        index += 2; // Move 2 positions forward in sequence


        if (i % 4 === 0) {
            console.log(`**${char1}${char2}**`);
        } else if (i % 4 === 1 || i % 4 === 3) {
            console.log(`*${char1}--${char2}*`);
        } else {
            console.log(`${char1}----${char2}`);
        }
    }
}

printDNA(10);