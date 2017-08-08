"use strict";

class Math2 {
  static between(x, a, b) {
    return x >= a && x <= b;
  }

  static betweenEx(x, a, b) {
    return x > a && x < b;
  }
}

module.exports.Math2 = Math2;
