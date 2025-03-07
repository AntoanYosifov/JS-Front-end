function solve(input) {
    let employeesInfo = input.reduce((acc, name) => {
        acc[name] = name.length;
        return acc;
    }, {});

    for (const key in employeesInfo) {
        console.log(`Name: ${key} -- Personal Number: ${employeesInfo[key]}`);
    }

}

solve([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
);