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
result();
const calculateSupply = (alter, mengeprotag) => {
  let maxalt = 100;
  return `Du brauchst ${((maxalt-alter)*mengeprotag)*365}, um bis zum reifen Alter von ${maxalt-alter} zu leben`;
};
console.log(calculateSupply(32,3));

// The Geometrizer
result();
const calcCircumference=(radius)=>{
    return `Der Umfang ist ${2*Math.PI*radius}`
}
console.log(calcCircumference(3))

const calcArea=(radius)=>{
    return`Die Fläche ist ${Math.PI*Math.pow(radius,2)}`
}
console.log(calcArea(3));
// The Temperature Converter
result();

const FahrenheitToCelsius =(n)=>{
  return`${n}°F ist ${((n-32)*5)/9}°C`
}
console.log(FahrenheitToCelsius(100));