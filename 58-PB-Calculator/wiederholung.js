class Calculator {
  constructor(PI = 3.141592653589793, E = 2.718281828459045) {
    this.PI = PI;
    this.E = E;
  }
  get PI(){
    return this._PI;
  }
  set PI(value){
    this._PI=value
  }
  get E(){
    return this._E;
  }
  set E(value){
    if(value===0){
        console.log("ERROR");
        return;
    }
    this._E=value
  }
  ratio(x, y, width) {
    return `height is ${y/x*width} on ratio `} 
  percentage(x, y) {
    return `the percentage of x in y ${x/y*100}`}
  add(x, y) {
    return `the sum of x added to y  ${x+y}.`} 
  subtract(x, y) {
   return `the difference of x subtracted from y is ${x-y}.`}
  multiply(x, y) {
    return `the product of x multiplied by y ${x*y}.`} 
  divide(x, y) {
    return `the quotient of x divided by y is ${x/y}. WARNING: If the divisor is set to 0, an error will be thrown.`} 
  modulation(x, y) {
    return `the remainder of x divided by y ${x%y}. WARNING: If the divisor is set to 0, an error will be thrown.`} 
  elevate(x, y) {
   return `the power of x elevated to y ${Math.pow(x,y)}.`}
  sqrt(x) {
    return `the square root of x. ${Math.sqrt(x)}`} 
}
let taschenrechner= new Calculator
console.log(taschenrechner.ratio(5,7,300));
console.log(taschenrechner.percentage(5,7));
console.log(taschenrechner.add(5,7));
console.log(taschenrechner.subtract(5,7));
console.log(taschenrechner.multiply(5,7));
console.log(taschenrechner.divide(5,7));
console.log(taschenrechner.modulation(5,7));
console.log(taschenrechner.elevate(5,7));
console.log(taschenrechner.sqrt(25));



