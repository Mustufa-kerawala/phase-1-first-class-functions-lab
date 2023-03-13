// Code your solution in this file!

// Creating a function called returnFirstTwoDrivers that will return an array of the first two drivers from the passed-in array.
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

// Creating a function called returnLastTwoDrivers that will return an array of the last two drivers from the passed-in array.
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

// Creating an array of the two functions (we wrote them above) that we may use to do different things with our drivers.
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Creating a function called createFareMultiplier that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

// Creating a function called fareDoubler that takes in a fare as its lone argument and doubles it.
const fareDoubler = createFareMultiplier(2);

// Creating a function called fareTripler that takes in a fare as its lone argument and triples it.
const fareTripler = createFareMultiplier(3);

// Creating a function called selectDifferentDrivers that takes in two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
const selectDifferentDrivers = function(drivers, whichDrivers) {
    return whichDrivers(drivers);
}

