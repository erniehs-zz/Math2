var Math2 = require("./index").Math2;
var expect = require("chai").expect;

describe("Math2 is a static library of useful functions", function() {
  describe("Math2 has between", function() {
    it("can test that a number is between two other numbers", function() {
      var bTrue = Math2.between(1, -10, 10);
      expect(bTrue).to.be.true;
    });
  });
});
