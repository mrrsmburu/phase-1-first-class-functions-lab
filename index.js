const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
  describe("returnFirstTwoDrivers", function() {
    const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
  
    it("returns a new array containing the first two drivers from the passed-in array", function() {
      expect(returnFirstTwoDrivers(drivers)).to.eql(["Sally", "Bob"]);
    });
  });
  
  
  describe("returnLastTwoDrivers", function() {
    const drivers = ["Sally", "Bob", "Freddy", "Claudia"];
  
    it("returns an array of the last two drivers", function() {
      expect(returnLastTwoDrivers(drivers)).to.eql(["Freddy", "Claudia"]);
    });
  });
  
  
  describe("selectingDrivers", function() {
    it("has the `returnFirstTwoDrivers` function to as its first element", function() {
      expect(selectingDrivers[0]).to.equal(returnFirstTwoDrivers);
    });
  
    it("has the `returnLastTwoDrivers` function to as its last element", function() {
      expect(selectingDrivers[1]).to.equal(returnLastTwoDrivers);
    });
  
    it("allows us to invoke either function from the array", function() {
      const drivers = ["Sally", "Bob", "F
