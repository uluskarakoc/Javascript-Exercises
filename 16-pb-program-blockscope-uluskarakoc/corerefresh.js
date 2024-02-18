let i = 1;
const result = () => {
  console.log(`Result****${i++}`);
};
// 1. Updater
result();
const determiner = 23;
const x = determiner < 0 ? "Kleiner als 0" : "Größer oder gleich 0";
console.log(x);
// 2. Neue Variablen
result();
let updater;
if (determiner >= 0) {
  updater = "Greater or equal to 0";
  let message = "message: Positive Integer";
  console.log(message);
} else {
  updater = "Less than 0";
}
console.log(updater);
