class Calculator {
  constructor(PI = 3.141592653589793, E = 2.718281828459045) {
    this.PI = PI;
    this.E = E;
  }
  get pi() {
    return this._PI;
  }
  
  get e() {
    return this._E;
  }
  
  ratio(x, y, width) {
    return `height is ${(y / x) * width} on ratio `;
  }
  percentage(x, y) {
    return `the percentage of x in y ${(x / y) * 100}`;
  }
  add(x, y) {
    return `the sum of x added to y  ${x + y}.`;
  }
  subtract(x, y) {
    return `the difference of x subtracted from y is ${x - y}.`;
  }
  multiply(x, y) {
    return `the product of x multiplied by y ${x * y}.`;
  }
  divide(x, y) {
    if (x === 0 || y === 0) {
      console.log("Error");
    }
    return `the quotient of x divided by y is ${x / y}. `;
  }
  modulation(x, y) {
    if (x === 0 || y === 0) {
      console.log("Error");
    }
    return `the remainder of x divided by y ${x % y}. `;
  }
  elevate(x, y) {
    return `the power of x elevated to y ${Math.pow(x, y)}.`;
  }
  sqrt(x) {
    return `the square root of x. ${Math.sqrt(x)}`;
  }
}
let taschenrechner = new Calculator();
console.log(taschenrechner.ratio(5, 7, 300));
console.log(taschenrechner.percentage(5, 7));
console.log(taschenrechner.add(5, 7));
console.log(taschenrechner.subtract(5, 7));
console.log(taschenrechner.multiply(5, 7));
console.log(taschenrechner.divide(0, 7));
console.log(taschenrechner.modulation(5, 7));
console.log(taschenrechner.elevate(5, 3));
console.log(taschenrechner.sqrt(25));
