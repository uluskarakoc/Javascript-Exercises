// **1. Add Up.**
let j = 1;
let result = () => {
  console.log("Result " + j++);
};
result();

const sumIntFrom1ToN = (a) => {
  let sum = 0;
  for (i = 0; i <= a; i++) {
    sum += i;
  }
  return sum;
};
// const result =sumIntFrom1ToN(10)
// console.log(result)
console.log(sumIntFrom1ToN(4));
console.log(sumIntFrom1ToN(13));
console.log(sumIntFrom1ToN(600));
// **2. Cubed.**
result();
const sumOfCubes = (a, b, c) => {
  return Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
};
console.log(sumOfCubes(1, 5, 9));
// **3. String Check.**
result();
const isStrStartOfWord = (a, b) => {
  if (b.startsWith(a)) {
    return true;
  } else {
    return false;
  }
};
console.log(isStrStartOfWord("ulus", "uluskarakoc"));
console.log(isStrStartOfWord("bu", "button"));
console.log(isStrStartOfWord("tri", "triplet"));
console.log(isStrStartOfWord("beau", "pastry"));
// **4. Less Than or Equal to Zero?**
result();
const isLEQZero = (a) => {
  if (a === 0 || a < 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isLEQZero(5));
console.log(isLEQZero(0));
console.log(isLEQZero(-4));
console.log(isLEQZero(10));
// **5. Count Occurrences.**
result();
// const countOccurrences =(a,b)=>{
//     return a.indexOf(b)
// }
// console.log(countOccurrences("uluskarakoc","k"))
// console.log(countOccurrences("this is a string", "i"))

const countOccurrences = (a, b) => {
  let counter = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] === b) {
      counter++;
    }
  }
  return counter;
};
console.log(countOccurrences("uluskarakoc", "k"));
console.log(countOccurrences("this is a string", "i"));
// **6. X hoch X.**
result();
const calcBaseToExponent = (a, b) => {
  return Math.pow(a, b);
};
console.log(calcBaseToExponent(5, 3));
console.log(calcBaseToExponent(10, 10));
console.log(calcBaseToExponent(3, 3));
// **7. Hundejahre.**
result();
const dogAge = (x) => {
  console.log(`Your doggo is ${x * 7} years old in dog years!`);
};
dogAge(8);
// **8. Ein lebenslanger Vorrat...**
result();
const calcLifetimeSupply = (a, b) => {
  const restSnack = (100 - a) * b;
  if (a < 100) {
    console.log(
      `The snack company should provide you with ${restSnack} units, until you are a ripe old age of 100. Happy snacking!`
    );
  } else {
    console.log(`Nichts`);
  }
};
calcLifetimeSupply(25, 2);

// function calcLifetimeSupply(currentAge, amountPerDay) { //Bonus: maxAge can be added here as a parameter. Snack was also added here for show
//     const MAX_AGE = 100;
//     const AVERAGE_YEAR = 365.25; //simplified calc for leap years
//     const SUPPLY_CALC = Math.ceil((MAX_AGE - currentAge) * AVERAGE_YEAR * amountPerDay); // Bonus: MAX_AGE could also be taken from a parameter here, Math.ceil() rounds the result of floating values here
//     return `The snack company should provide you with ${SUPPLY_CALC} units, until you are a ripe old age of ${MAX_AGE}. Happy snacking!`;
//   }

//   console.log(calcLifetimeSupply(25, 2));
//   console.log(calcLifetimeSupply(40, 3));
//   console.log(calcLifetimeSupply(32, 0.58));

// **9. Where's Waldo?**
