let i = 1;
const result = () => {
  console.log(`Result****${i++}`);
};

// TASK 1
// Write your code here ↓↓↓↓ //
result();
const printExponentialValues = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    console.log("a or b is not a number");
  } else {
    for (let i = 1; i <= b; i++) {
      console.log(Math.pow(a, i));
    }
  }
};
printExponentialValues(5, 6);
printExponentialValues("c", 6);
printExponentialValues("c", "g");
// TASK 2
// Write your code here ↓↓↓↓ //
result();
const lieblingsFrucht = "limon";
const printFavoriteFruit = (x) => {
  console.log(`My favorite fruit is: ${x}`);
};
printFavoriteFruit(lieblingsFrucht);

// TASK 3
// Write your code here ↓↓↓↓ //
const exponent = (x, y) => {
  const result = Math.pow(x, y);
};

console.log(exponent(2, 4));
exponent(2,4);
console.log(result);
