function solve() {
    let restaurantsInfo = JSON.parse(document.querySelector('div#inputs textarea').value);

    let restaurantObjsArr = []

    for (let i = 0; i < restaurantsInfo.length; i++) {
        let currentRestObj = {}

        let currentRestaurantInfo = restaurantsInfo[i];

        let [restaurantName, workers] = currentRestaurantInfo.split(' - ');
        let workersInfoArr = workers.split(', ');

        let workersInfoObjArr = []
        for (let j = 0; j < workersInfoArr.length; j++) {
            let [workerName, salary] = workersInfoArr[j].split(' ');
            let filtered = restaurantObjsArr.filter((el) => el.hasOwnProperty(restaurantName));

            if (filtered.length > 0) {
                let existingRestObj = filtered[0];
                let existingWorkersArr = existingRestObj[restaurantName];
                existingWorkersArr.push({
                    workerName,
                    salary,
                });
            } else {
                workersInfoObjArr.push({
                    workerName,
                    salary,
                });
            }
        }

        if (workersInfoObjArr.length > 0) {
            currentRestObj[restaurantName] = workersInfoObjArr
            restaurantObjsArr.push(currentRestObj);
        }
    }

    let bestRest = '';
    let averageSalary = -1;

    for (let i = 0; i < restaurantObjsArr.length; i++) {
        let currentRestInfo = restaurantObjsArr[i];
        for (const currentRestName in currentRestInfo) {
            let sumOfSalaries = currentRestInfo[currentRestName]
                .sort((a, b) => b.salary - a.salary)
                .reduce((acc, worker) => {
                    acc += Number(worker.salary);
                    return acc;
                }, 0);

            let currentAverageSalary = Number((sumOfSalaries / currentRestInfo[currentRestName].length).toFixed(2));
            if (currentAverageSalary > averageSalary) {
                averageSalary = currentAverageSalary;
                bestRest = currentRestName;
            }
        }
    }

    let bestResWorkers = restaurantObjsArr.filter(res => res.hasOwnProperty(bestRest))[0][bestRest];

    let bestResInfo = `Name: ${bestRest} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${Number(bestResWorkers[0].salary).toFixed(2)}`;
    let bestResWorkerInfo = bestResWorkers.map(worker => `Name: ${worker.workerName} With Salary: ${worker.salary}`).join(' ');

    let bestRestParagraphElement = document.querySelector('div#bestRestaurant p');
    let bestWorkersParagraphElement = document.querySelector('div#workers p');

    bestRestParagraphElement.textContent = bestResInfo;
    bestWorkersParagraphElement.textContent = bestResWorkerInfo;
}