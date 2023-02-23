// TASK 1
// Write your code here ↓↓↓↓ //
const printExponentialValues = (x, y) => {
  if (typeof x === "number" && typeof y === "number") {
    console.log(`ja`);
  } else {
    console.log(`nein`);
  }
};
printExponentialValues("a", "b");

// * Wenn wir zum Beispiel function(3, 5) haben, sollte die Funktion `3 9 27 81 243` ausgeben. (Gibt 5 Exponentialwerte von 3 aus)
// * Funktion(2, 8) Die Funktion gibt `2 4 8 16 32 64 128 256` aus. (Gibt 8 Exponentialwerte von 2 aus)

const vielfach = function (a, b) {
  for (let i = 1; i <= b; i++) {
    const ulus = Math.pow(a, i);
    console.log(ulus);
  }
};
vielfach(3, 5);
// TASK 2
// Write your code here ↓↓↓↓ //

let fruit = ["apfel", "aprikose", "ananas", "himbeeren"];
const printFavoriteFruit = () => {
  fruit = ["apfel"];
  console.log(`Meine Lieblingsfrucht ist:${fruit}`);
};
printFavoriteFruit();
console.log(fruit);

// TASK 3
// Write your code here ↓↓↓↓ //
function exponent(a, b) {
  const result = Math.pow(a, b);
  console.log(result);
}
exponent(2, 8);
