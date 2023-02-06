// 1 Updater
const determiner = 56;
const x = determiner < 0 ?"Kleiner als 0":"Größer oder gleich 0";
console.log(x)

// 2 New Variables

let updater;
if (determiner >= 0) {
  updater = 'Greater or equal to 0';
  let message = 'message: Positive Integer';
  console.log(message);
} else {
  updater = 'Less than 0';
}
console.log(`updater: ${updater}`);
// 3 Ternary v.s. If statement


