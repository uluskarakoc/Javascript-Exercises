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
    control(x, y) {
      if (typeof x !== 'number' || typeof y !== 'number') {
        return `Invalid value. Must be a number`;
      }
    }
    //methods
    ratio(x, y, width) {
      const returnOfControl = this.control(x, y);
      if (returnOfControl) {
        return returnOfControl;
      }
      return `height is ${(y / x) * width} on ratio x:y`;
    }
  
    percentage(x, y) {
      const returnOfControl = this.control(x, y);
      if (returnOfControl) {
        return returnOfControl;
      }
      return `${(x / y) * 100}%`;
    }
  
    add(x, y) {
      const returnOfControl = this.control(x, y);
      if (returnOfControl) {
        return returnOfControl;
      }
      return x + y;
    }
  
    subtract(x, y) {
      const returnOfControl = this.control(x, y);
      if (returnOfControl) {
        return returnOfControl;
      }
      return y - x;
    }
  
    multiply(x, y) {
      const returnOfControl = this.control(x, y);
      if (returnOfControl) {
        return returnOfControl;
      }
      return x * y;
    }
  
    divide(x, y) {
      const returnOfControl = this.control(x, y);
      if (returnOfControl) {
        return returnOfControl;
      }
      if (y == 0) {
        return `The second number cannot be 0 in division!!!`;
      }
      return x / y;
    }
    modulation(x, y) {
      const returnOfControl = this.control(x, y);
      if (returnOfControl) {
        return returnOfControl;
      }
      return x % y;
    }
  
    elevate(x, y) {
      const returnOfControl = this.control(x, y);
      if (returnOfControl) {
        return returnOfControl;
      }
      return x ** y;
    }
  
    sqrt(x) {
      if (typeof x !== 'number') {
        return `Invalid value. Must be a number`;
      }
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
  console.log('----');
  console.log(calculate.multiply('5', 7));
  console.log('----');
  console.log(calculate.divide(35, 0));
  console.log('----');
  console.log(calculate.modulation(7, 5));
  console.log(calculate.elevate('5', 3));
  console.log(calculate.sqrt(25));