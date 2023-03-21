class Calculator {
    constructor() {
      this.PI = 3.141592653589793;
      this.E = 2.718281828459045;
    }
  
    //getter
    get pi() {
      return this.PI;
    }
    get e() {
      return this.E;
    }
  
    //methods
    ratio(x, y, width) {
      return `height is ${(y / x) * width} on ratio x:y`;
    }
  
    percentage(x, y) {
      return `${(x / y) * 100}%`;
    }
  
    add(x, y) {
      return x + y;
    }
  
    subtract(x, y) {
      return y - x;
    }
  
    multiply(x, y) {
      return x * y;
    }
  
    divide(x, y) {
      return x / y;
    }
    modulation(x, y) {
      return x % y;
    }
  
    elevate(x, y) {
      return x ** y;
    }
  
    sqrt(x) {
      return Math.sqrt(x);
    }
  }
  
  const calculate = new Calculator();
  
  console.log(calculate.pi);
  console.log(calculate.e);
  console.log(calculate.ratio(5, 7, 300));
  console.log(calculate.percentage(3, 12));
  console.log(calculate.add(5, 7));
  console.log(calculate.subtract(5, 7));
  console.log(calculate.multiply(5, 7));
  console.log(calculate.divide(35, 7));
  console.log(calculate.modulation(7, 5));
  console.log(calculate.elevate(5, 3));
  console.log(calculate.sqrt(25));