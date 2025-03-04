function nXnMatrix(n) {
  for (let i = 0; i < n; i++) {
    let row = []
    for (let j = 0; j < n; j++) {
      row.push(n);
    }
    console.log(row.join(' '));
  }
}

// nXnMatrix(7);

const nXnMatrixOneRow = (n) => console.log(((n + " ").repeat(n).trim() + "\n").repeat(n).trim());

nXnMatrixOneRow(7)
