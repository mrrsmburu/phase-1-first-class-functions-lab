const drivers = ["Sally", "Bob", "Freddy", "Claudia"]

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function(fareMultiplier) {
    return function(value ) {
      return fare * value;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
  
  
  
  
  
  
  
