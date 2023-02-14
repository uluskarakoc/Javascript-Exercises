// 1. Schreibe eine Funktion namens `triplet`, die einen Parameter entgegennimmt und diesen dreimal in der Konsole ausgibt. Für die Eingabe "Katze" würde die Funktion "KatzeKatzeKatze" ausgeben.
const triplet = () => {
  let text = "Katze";
  console.log(text.repeat(3));
};
triplet();

// 2. Write a function named `quintuplet` that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"
const quintuplet = () => {
  let text = "Katze";
  return text.repeat(5);
};
let katze = quintuplet();
console.log(katze);

// 3. Schreibe eine Funktion mit dem Namen `multiStr`, die zwei Parameter entgegennimmt, wobei der erste eine Zahl und der zweite ein String sein sollte. Die Funktion gibt das zweite Argument so oft wiederholt zurück, wie es der Wert des ersten Arguments definiert. Für die Eingaben `3` und `Woah` sollte sie `WoahWoahWoah` zurückgeben.
const multiStr = (a, b) => {
  for (i = 0; i < a; i++) {
    return;
  }
};
let result = multiStr(3, "ulus");
console.log(result);

// 4. Schreibe eine Funktion mit dem Namen `largestNumInArray` die ein Array von Zahlen als Parameter entgegennimmt. Sie soll die größte Zahl in dem Array zurückgeben. Für die Eingabe `[1,6,83,91,0,-4,1337,5]` sollte sie `1337` zurückgeben
zahlen = [1, 6, 83, 91, 0, -4, 1337, 5];
const largestNumInArray = () => {
  return Math.max(zahlen);
};

result = largestNumInArray();
console.log(result);

// 5. Diese Aufgabe hat 2 Teile
// Teil a) Schreibe eine Funktion mit dem Namen `printIfDivisibleByTen`, die eine Zahl entgegennimmt und ein `"Even 10!"` auf der Konsole ausgibt, wenn die Zahl gerade durch 10 teilbar ist
function printIfDivisibleByTen(a) {
  if (a % 10 === 0) {
    console.log(`Èven 10`);
  } else {
    console.log(`Keine Ausgabe`);
  }
}
printIfDivisibleByTen(85);
// Teil b) Schreibe eine for-Schleife, die 125 Mal durchläuft und dabei jedes Mal die Funktion, die du in Teil a erstellt hast, mit der aktuellen Iterationsnummer aufruft
// function printIfDivisibleByTen(a) {
//   for (i = 0; i <= 125; i++) {
//     if (a % 10 === 0) {
//       console.log(`Èven 10`);
//     } else {
//       console.log(`Keine Ausgabe`);
//     }
//   }
// }
// printIfDivisibleByTen(85);
// 6. Schreibe eine Pfeilfunktion namens `largestNum` die 5 Zahlen als Parameter entgegennimmt und die größte zurückgibt.
const largestNum = (a, b, c, d, e) => {
  return Math.max(largestNum);
};
let result1 = largestNum(2, 4, 6, 8, 32);
console.log(result1);

// 7. Schreibe eine Pfeilfunktion mit dem Namen `isString`, die einen Parameter entgegennimmt und true zurückgibt, wenn dieser Parameter eine Zeichenkette ist.
const isString = (a) => {
  if (isNaN(a)) {
    return true;
  }
};
let result2=isString("ulus")
console.log(result2)
