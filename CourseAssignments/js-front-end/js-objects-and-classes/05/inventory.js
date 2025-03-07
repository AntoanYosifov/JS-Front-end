function solve(heroesInfo) {
    let heroesRegister = []

    for (let i = 0; i < heroesInfo.length; i++) {
        let [name, level, inventory] = heroesInfo[i].split(' / ');

        let currentHero = {
            name,
            level: Number(level),
            inventory,
        }

        heroesRegister.push(currentHero);
    }

    heroesRegister.sort((a, b) => a.level - b.level).forEach(hero => {
        console.log(`Hero: ${hero.name}`)
        console.log(`level => ${hero.level}`)
        console.log(`items => ${hero.inventory}`)
    });
}

solve([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
)
//
// solve([
//         'Batman / 2 / Banana, Gun',
//         'Superman / 18 / Sword',
//         'Poppy / 28 / Sentinel, Antara'
//     ]
// )