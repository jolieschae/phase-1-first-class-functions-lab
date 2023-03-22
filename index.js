const returnFirstTwoDrivers = (arrayOfDrivers) => arrayOfDrivers.slice(0,2)

const returnLastTwoDrivers = (arrayOfDrivers) => arrayOfDrivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(i) {
    return function(fare) {
        return i * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, aDriver) {
    return aDriver(arrayOfDrivers)
}

selectDifferentDrivers([], returnLastTwoDrivers)
