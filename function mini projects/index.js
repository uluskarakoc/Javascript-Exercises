let i = 1;
function result() {
  console.log(`Result ${i++}`);
}

// The Fortune Teller
result();
const tellFortune = (
  kinder = 4,
  partner = "yulia",
  standort = "Hamburg",
  beruf = "webdeveloper"
) => {
  return `Du wirst ein ${beruf} in ${standort} sein, verheiratet mit ${partner} und hast ${kinder} Kinder.`;
};
console.log(tellFortune());
console.log(tellFortune("double", "Japan", "Los angelas", "actress"));
// The Puppy Age Calculator
result();
const calculateDogAge = (menschenjahr) => {
  return `Dein Hündchen ist ${menschenjahr * 7} Jahre alt in Hundejahren!`;
};
console.log(calculateDogAge(3));
console.log(calculateDogAge(2));
console.log(calculateDogAge(9));

// The Lifetime Supply Calculator

// The Geometrizer

// The Temperature Converter
