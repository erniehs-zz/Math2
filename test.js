var Math2 = require("./index").Math2;
var expect = require("chai").expect;

describe("Math2 is a static library of useful functions", function() {
  describe("Math2 has between", function() {
    it("can test that a number is between two other numbers", function() {
      expect(Math2.between(1, -10, 10)).to.be.true;
      expect(Math2.between(-10, -10, 10)).to.be.true;
      expect(Math2.between(10, -10, 10)).to.be.true;
      expect(Math2.between(2, -10, 10)).to.be.true;
      expect(Math2.between(5, -10, 10)).to.be.true;
      expect(Math2.between(0, -10, 10)).to.be.true;
    });
    it("can test that a number is not between two other numbers", function() {
      expect(Math2.between(10.1, -10, 10)).to.be.false;
      expect(Math2.between(-11, -10, 10)).to.be.false;
      expect(Math2.between(11, -10, 10)).to.be.false;
      expect(Math2.between(12, -10, 10)).to.be.false;
      expect(Math2.between(50, -10, 10)).to.be.false;
      expect(Math2.between(-10.1, -10, 10)).to.be.false;
    });
  });
});
