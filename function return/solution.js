// 1. Schreibe eine Funktion namens `triplet`, die einen Parameter entgegennimmt und diesen dreimal in der Konsole ausgibt. Für die Eingabe "Katze" würde die Funktion "KatzeKatzeKatze" ausgeben.
const triplet = () => {
  for (let i = 1; i < 2; i++) {
    let text = "Katze";
    console.log(text.repeat(3));
  }
};
triplet();

// 2. Write a function named `quintuplet` that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"

const quintuplet = () => {
  let text = "Katze";
  return text.repeat(5);
};
let katze = quintuplet();
console.log(katze);
