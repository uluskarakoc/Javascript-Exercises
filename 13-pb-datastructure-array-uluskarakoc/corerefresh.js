let i = 1;
result = () => {
  console.log(`Result **** ${i++}`);
};

// 1. Deklariere eine Variable mit dem Namen `myArray` und speichere ein Array mit 5 Elementen. Gib das Array aus.
result();
const myArray = [1, "Ulus", 56, "Buchholz", 26];
// 2. Greife auf das dritte Element im Array zu und speichere es in einer anderen Variablen mit dem Namen `thirdElement`. Drucke das `thirdElement` aus.
result();
const thirdElement = myArray[2];
console.log(thirdElement);
// 3. Weise das vierte Element des Arrays neu zu und gib ihm den Wert "fourth element". Drucke das Array noch einmal aus.
result();
myArray[3] = "Fourth Element";
console.log(myArray[3]);
console.log(myArray);