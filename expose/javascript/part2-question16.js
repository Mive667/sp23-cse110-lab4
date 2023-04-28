

let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

/**
 * iterate through statistics obj and
 * print out values of properties if
 * name start with 'r' or
 * value is odd
 */
for (let carType in statistics) {
    if (carType.charAt(0) == 'r') {
        console.log(statistics[carType]);
    } else if (statistics[carType] & 1 == 1) {
        console.log(statistics[carType]);
    }
}