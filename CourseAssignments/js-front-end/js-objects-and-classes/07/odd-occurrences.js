function solve(input) {

    let inputArr = input.split(' ');

    let occurrences = inputArr.reduce((acc, currentValue) => {
        acc[currentValue.toLowerCase()] = (acc[currentValue.toLowerCase()] || 0) + 1;
        return acc;
    }, {});

    let entries = Object.entries(occurrences);

    let tokensArr = []
    let filtered = entries.filter(entry => entry[1] % 2 !== 0);
    filtered.forEach(a => tokensArr.push(a[0]));

    console.log(tokensArr.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');