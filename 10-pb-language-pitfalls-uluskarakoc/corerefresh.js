let i = 1;
result = () => {
  console.log(`Result **** ${i++}`);
};
// 1- Write code that checks if "hello" is NaN. Print the result to the Terminal
result();
console.log(isNaN("Hello"));
// 2- Check if 3 is NaN. Print the result to the Terminal
result();
console.log(isNaN(3));
// 3 - What is the type of NaN? Print the result to the Terminal
result();
console.log(typeof NaN);
//  4 - The above in JavaScript will print: 0.020000000000000004. Use a method to make sure that only 0.02 is printed to the Terminal
// console.log(0.1 * 0.2);
result();
console.log((0.1 * 0.2).toFixed(2));
// 5- Divide Infinity by 0. Print the result to the Terminal
result();
console.log(Infinity / 0);
// 6- Divide Infinity by Infinity. Print the result to the Terminal
result();
console.log(Infinity / Infinity);
// 7- Divide 1 by 0. Print the result to the Terminal
result();
console.log(1 / 0);
console.log(parseInt(23.545465));
