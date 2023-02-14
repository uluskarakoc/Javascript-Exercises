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

// 8. Write an arrow function named `areStrings` that takes in two parameters and returns true if both of them are strings.
const areStrings = (a,b) => {
  if (isNaN(a) &&(isNaN(b))) {
    return true;
  }
};
let result3=areStrings("ulus","karakoc")
console.log(result3)

// 9. Write an arrow function named `getFirstWord` that takes in one string as parameter. The function should return the first word in the string. Examples:
//     - getFirstWord("Internetting is hard") --> "Internetting"
//     - getFirstWord("Hello World") --> "Hello"
//     - getFirstWord("Hello") --> "Hello"
name1="ulus karakoc"
const getFirstWord =(name1)=>{
return name1
}
let result4 =getFirstWord()
console.log(result4)

// 10. *HARD* Write an arrow function named `wordRepeater` that takes in one string as parameter.
// The function should return a new string where each word in the input string is repeated by the number of words in the input string. Examples:
//     - wordRepeater("bunny") --> "bunny"
//     - wordRepeater("Cat food") --> "Cat Cat food food"
//     - wordRepeater("I am groot") --> "I I I am am am groot groot groot"
//     - wordRepeater("O M G ?") --> "O O O O M M M M G G G G ? ? ? ?"



// 11. Write a short (single line) arrow function named `firstLetter` that takes in one string and returns the first character of that string. Examples:
//     - firstLetter("cat") --> "c"
//     - firstLetter("quylthulg") --> "q"
const name2 ="ulus karakoc"
const firstLetter =(a)=>{
  return name2[a]
}
const result5 = firstLetter(0)
console.log(result5)

// 12. Schreibe eine Pfeilfunktion namens `firstLetters`, die eine Zeichenkette als Parameter entgegennimmt und eine neue Zeichenkette zurückgibt. Die neue Zeichenkette muss aus dem ersten Buchstaben jedes Wortes in der Eingabe gebildet werden. Beispiele:
//     - firstLetters("Cat") --> C"
//     - firstLetters("What the fruit") --> "Wtf"
//     - firstLetters("MongoDB Express Node React") --> "MERN"
//     - firstLetters("What You See Is What You Get") --> "WYSIWYG"